# The Intelligibility Monument Digital Platform Pro

Ready-to-upload static web app for GitHub Pages.

## Main features

- Clickable monument design board with working hotspot buttons.
- QR access for monument elements, provinces, voices, materials, and dossier.
- 114 ready voice records from 38 Indonesian provinces.
- Three voice records per province: Student Voice, Academic Voice, and Community Voice.
- Interactive province voice map.
- Voice archive with search and filters.
- Browser text-to-speech preview and optional local audio upload.
- Materials and symbolism system.
- International recognition dossier generator.
- Admin Studio for editing, export/import JSON, and resetting demo framework.
- No API key and no backend required.

## How to deploy on GitHub Pages

1. Unzip this package.
2. Create a new public GitHub repository.
3. Upload the files directly to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.webmanifest`
   - `README.md`
   - `assets/`
4. Go to repository Settings > Pages.
5. Source: Deploy from a branch.
6. Branch: `main`, folder: `/root`.
7. Save and wait for the online link.

Important: Do not upload the ZIP itself to GitHub Pages. Upload the extracted files.

## Data model

The app uses browser `localStorage`. Data added in Admin Studio is saved in the current browser. To back up or move the data, use **Export JSON Backup** and **Import JSON Backup**.

For a future institutional public version with many users and large audio files, upgrade storage to Firebase, Supabase, or a university server.

## Voice records

The 114 voice entries are demo slots. They are designed to represent all Indonesian provinces for the structure of the platform. Replace them with real consent-based recordings, transcripts, and metadata when you collect the voices.

## QR generation

QR images use a free online QR image endpoint when online. The QR links are generated from the live GitHub Pages URL, so after deployment the QR codes point to your real online app.
