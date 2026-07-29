# Kotha — learn spoken Bengali (কথা)

A story-driven web app for speaking everyday **Kolkata Bengali** in 60 days. You
play Kabir, landing in Kolkata with a deadline: win over your girlfriend's family,
and a grandmother (Thakuma) who speaks no English. Inspired by the story-first,
no-script approach of spoken-language apps like Matladu, rebuilt for Bengali.

## Run it

It must be served over HTTP (not opened as a `file://` URL), so hash routing,
audio and the canvas behave:

```bash
cd Kotha
python3 -m http.server 8000
```

Then open http://localhost:8000/index.html

## Files

| File | What it is |
|------|-----------|
| `index.html` | Marketing landing page |
| `app.html`   | The live app shell (loads the SPA) |
| `data.js`    | All content: words, phonetics, phrases, chapters, dialogue scripts, people, guides, essays, the alphabet |
| `app.js`     | The engine: routing, the learning ladder, games, word popovers, script-tracing, sign-in, progress |
| `styles.css` | The Bengali design system (sindoor red, saree cream, bottle green, marigold) |

## What's inside

- **The story** — six units across sixty days, two milestone chapters (Day 30 her
  parents, Day 60 Thakuma), each with a scene, a phrase ladder, and a full dialogue.
- **The ladder** — every phrase climbs: exposure, recognition, guided recall, free
  recall, then the whole conversation in the scene.
- **Learn the script** — a separate writing lab: the Bengali alphabet, each letter
  with its sound and an example word, and a pad to trace it with finger or mouse.
- **Phonetics** — every word and phrase carries a casual romanization and a broad
  IPA transcription for Kolkata pronunciation.
- **Guides** — eight detailed reference articles on the tricky parts of spoken Bengali.
- **Writing** — essays on the thinking behind the syllabus.
- **Games, Word Album, People, Progress**, and tappable words everywhere.
- **Audio** — the browser's speech synthesis, using a Bengali voice if the device
  has one. Real recorded native audio would need actual audio files (not included).

## Wiring real Google sign-in

The build ships with a **local demo sign-in** so you can try the flow without any
setup. It stores a user object in `localStorage` and never calls Google.

To connect real Google Identity Services:

1. Create an OAuth 2.0 Client ID at https://console.cloud.google.com/apis/credentials
   and add your origin (e.g. `http://localhost:8000`) to the authorized origins.
2. Add the Google Identity script to `app.html`:
   `<script src="https://accounts.google.com/gsi/client" async defer></script>`
3. In `app.js`, replace the body of the `#gbtn` click handler inside `openSignin()`
   with a real `google.accounts.id` flow, decode the returned JWT credential, and
   call `state.user = { name, email }; save(); renderAccount();`.

Nothing else changes: progress is already saved in `localStorage`, and sign-in only
exists to persist it. The whole library works signed out.
