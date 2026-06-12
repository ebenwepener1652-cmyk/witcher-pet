# Witcher Pet — Baby Geralt 🐺

A Witcher-themed Tamagotchi. Raise Geralt from foundling to monster-slaying witcher: feed him, train him, brew potions, learn Signs, survive the Trial of the Grasses, hunt monsters, take contracts, and play Gwent — across a 12-chapter storyline.

## Try it right now (PC)
Double-click `index.html`. The game runs in any modern browser.

## Put it on your Honor 600 Pro (the real Tamagotchi experience)
The game must be hosted online once so your phone can install it as an app. You already have Git Bash — this takes 5 minutes:

1. Go to **github.com**, sign in (or create a free account), click **New repository**, name it `witcher-pet`, set it **Public**, click **Create**.
2. Open **Git Bash** and run (replace YOURUSERNAME with your GitHub username):

```
cd ~/OneDrive/Documents/Claude/Projects/tamagotchi/witcher-pet
git init
git add .
git commit -m "Witcher Pet v1"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/witcher-pet.git
git push -u origin main
```

3. On GitHub: your repo → **Settings → Pages** → under "Branch" choose **main** / root → **Save**. Wait ~2 minutes.
4. On your phone, open Chrome and go to:
   `https://YOURUSERNAME.github.io/witcher-pet/`
5. Chrome menu (⋮) → **Add to Home screen → Install**. It now runs fullscreen like a native app, works offline, and keeps living while closed.
6. In-game: **More ⚙️ → Enable notifications** so he can call for help when starving or under attack.

## How it plays
- **Stats** (top bar): health, food, energy, happiness, cleanliness, toxicity. They drain in real time — even while the app is closed. Come back after hours away and you'll see what happened.
- **Growth**: Infant → Child → Apprentice → (Trial of the Grasses) → Witcher. Real days, like a true Tamagotchi.
- **The Trial**: the story's turning point. Get his health high before you risk it.
- **Alchemy**: forage herbs, brew Swallow/Cat/Thunderbolt/White Honey + blade oils. Watch toxicity.
- **Combat**: turn-based hunts — silver sword, Igni/Aard/Quen/Yrden, dodges, potions. Monsters hit harder at night (real night!). Post-Trial, monsters ambush him — even while you're away.
- **Gwent**: full mini-Gwent — 3 rows, best of 3 rounds, one hand for the whole match, weather, hero cards, Scorch. Win crowns and collect all 25 cards.
- **Tap Geralt** to pet him.

Fan-made, non-commercial tribute. The Witcher belongs to Andrzej Sapkowski / CD PROJEKT RED.
