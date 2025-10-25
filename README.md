
🌍 Language Prefix Conventions
Prefix	Language / Accent
english	British English (RP)
american_english	U.S. English
portuguese	Brazilian Portuguese
french	Parisian French
spanish	Castilian Spanish
mandarin	Mandarin Chinese
turkish	Turkish
italian	Standard Italian
etc.	Any new code you define in languages.js



🧩 Adding a New Language

Open src/languages.js

Copy an existing language block

Change:
Define sections:

category: "vowel" | "diphthong" | "consonant" | "tone"
grid: [...]  // for vowels/diphthongs
rows: [...]  // for consonants



Save – the new flag appears automatically on the landing screen.

Run:
node make_recording_list.js --lang newlanguage
to create a fresh list of audio files.

🪄 Helpful Notes

needsSchwa: true adds the small red ə beside consonants that require a helper vowel.

Use [brackets] inside highlighted text to show which letters make the sound.

Add tooltip fields for hover definitions (e.g. "Voiceless bilabial plosive").

🧠 Quick Checklist
Bucket URL updated in PhonemeChart.jsx

🧰 Optional Tools

Missing-audio indicator – visually flag files not yet uploaded.

Tooltips – show articulatory descriptions on hover.

Playback-speed slider – fine-tune listening practice.

Voice-set suffix – manage multiple speaker versions (already supported).