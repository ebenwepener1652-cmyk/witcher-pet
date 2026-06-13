/* Witcher Pet service worker — network-first for the app, cache fallback offline */
const CACHE = "witcherpet-v7";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const isPage = e.request.mode === "navigate" ||
                 url.pathname.endsWith("/") ||
                 url.pathname.endsWith(".html");
  if (isPage) {
    // network-first: always try to get the freshest page, fall back to cache offline
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request).then(h => h || caches.match("./index.html")))
    );
  } else {
    // static assets: cache-first for speed, update in background
    e.respondWith(
      caches.match(e.request).then(hit => hit ||
        fetch(e.request).then(res => {
          if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
          return res;
        })
      )
    );
  }
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({type: "window"}).then(list => {
    for (const c of list) { if ("focus" in c) return c.focus(); }
    return clients.openWindow("./");
  }));
});
