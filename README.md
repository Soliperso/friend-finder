# 🤝 Friend Finder

A personality-matching web app built with **Node.js** and **Express**. The home page leads to a 10-question personality survey; on submit, the user is matched with the "friend" whose answers are closest to theirs.

The UI has a modern look — animated gradient background, frosted‑glass cards, segmented 1–5 rating controls, and a custom match‑reveal modal — and is fully responsive.

## Run locally

```bash
npm install
npm start
```

Then open **http://localhost:3000**.

## How it works

- `GET /` → home / landing page
- `GET /survey` → the personality survey
- `GET /api/friends` → JSON list of all friends
- `POST /api/friends` → accepts `{ name, profilePic, scores: [10] }`, compares the score array against every friend (lowest total difference wins) and returns the best match

## Tech

- Node.js + Express
- Vanilla HTML / CSS / JavaScript (no framework, no build step)
- Google Fonts (Poppins + Inter)

## Deploy a public URL

The app reads `process.env.PORT`, so it runs on any standard Node host.

### Render (recommended, free) — uses the included `render.yaml`
1. Push this repo to GitHub.
2. Go to [render.com](https://render.com) → **New** → **Web Service**.
3. Connect the `friend-finder` repo. Render auto-detects `render.yaml`:
   - Build command: `npm install`
   - Start command: `npm start`
4. Click **Deploy**. You'll get a public URL like `https://friend-finder-xxxx.onrender.com`.

### Other hosts
Railway, Cyclic, Fly.io, and Heroku also work with no changes — they all just run `npm start`.

## Author
Ahmed Chebli
