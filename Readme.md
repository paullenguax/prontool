# Lenguax Pronunciation Tool — How To Use

## The two scripts

| Script | What it does | Give to |
|--------|-------------|---------|
| `make_recording_list.js` | Lists every recording needed with filenames | Yourself — check what's missing |
| `make_voice_recording_pack.js` | Generates a reading script + filename CSV | Voice actor + S3 upload reference |

---

## Generating recording lists

```bash
# All languages, no voice suffix in filenames
node make_recording_list.js

# One language
node make_recording_list.js --lang spanish

# With a voice suffix (adds -female to filenames)
node make_recording_list.js --lang french --voice female
```

Output: `recording_list.txt` (human-readable) and `recording_list.csv` (spreadsheet).

---

## Generating a voice actor pack

```bash
# One language, one voice (voice suffix is required)
node make_voice_recording_pack.js --lang spanish --voice female
node make_voice_recording_pack.js --lang spanish --voice male

# All languages at once
node make_voice_recording_pack.js --voice female
```

Output:
- `voice_actor_script.txt` — send this to the voice actor
- `filenames_for_upload.csv` — use this when uploading to S3

---

## File naming convention

```
{language}-{type}-{sanitized-ipa}-{voice}.mp3
```

Examples:
```
english-phoneme-theta-female.mp3     # /θ/ sound
english-word-thin-female.mp3         # the word "thin"
spanish-phoneme-ny-male.mp3          # /ɲ/ sound
mandarin-tone-ma1-female.mp3         # first tone on "ma"
```

---

## Adding a new language

**1. Add it to `src/languages.js`:**

```js
newlanguage: {
  name: "Language Name",
  flag: "🇫🇷",
  defaultVoice: "female",
  sections: [
    {
      title: "Vowels",
      subtitle: "Optional description",
      category: "vowel",          // vowel | diphthong | consonant | tone
      list: [
        {
          ipa: "i",
          example: "si",
          highlighted: "s[i]",    // brackets mark the sound in the word
          description: "close front unrounded vowel",
          needsSchwa: false       // set true for stops/fricatives that need an "uh" after
        },
      ]
    }
  ]
}
```

**2. Generate and check:**

```bash
node make_recording_list.js --lang newlanguage
```

**3. Generate voice actor packs:**

```bash
node make_voice_recording_pack.js --lang newlanguage --voice female
node make_voice_recording_pack.js --lang newlanguage --voice male
```

**4. Send `voice_actor_script.txt` to the voice actor. Upload received files to S3 using exact filenames from `filenames_for_upload.csv`.**

---

## IPA sanitization

`sanitizeIdentifier()` in `ipaMap.js` converts IPA symbols to filename-safe strings. 150+ mappings are already defined. Common ones:

```
θ  → theta      ð  → eth       ʃ  → sh        ʒ  → zh
ŋ  → ng         tʃ → ch        dʒ → dzh       ɲ  → ny
iː → ee         ɪ  → ih        ə  → schwa      ɜː → er
```

To test a symbol:
```bash
node -e "import('./ipaMap.js').then(m => console.log(m.sanitizeIdentifier('θ')))"
```

If a symbol isn't mapped, add it to `IPA_MAP` in `ipaMap.js`:
```js
"ɵ": "barred-o",
```

---

## Admin dashboard

A local admin dashboard lets you manage language status and upload missing audio files to S3 without logging into AWS.

```bash
npm run admin
# → open http://localhost:3001
```

**Languages tab** — toggle any language between Active and Coming Soon. Changes write to `src/language-status.json` immediately. Run `npm run build` afterwards to publish the change.

**Audio tab** — click Check on any language to see which recordings are present/missing in S3. Missing files show an Upload button to send them directly.

**Setup:** copy `.env.example` to `.env` and fill in your AWS credentials and bucket details. The dashboard only runs locally — it is never built or deployed to the web server. Only the output of `npm run build` (the `dist/` folder) goes on the server.

---

## Deploying to the web server

```bash
npm run build
# upload dist/ to /lenguax.com/public_html/lxprontool/ via FileZilla
```

The `dist/` folder is the entire site. The admin server, `.env`, and source files stay on your machine.

---

## Troubleshooting

**Audio not playing in the app?**
1. Check the browser console for the URL it's trying to fetch
2. Confirm the file exists in S3 at that exact path
3. Check that the voice toggle matches the voice suffix used when recording (`-male` / `-female`)

**Script generates empty output?**
- Make sure your language sections use `list: [...]` (not `grid` or `rows`)
- Check that each cell has an `ipa` field — cells without one are skipped
