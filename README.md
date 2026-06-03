# The Intelligibility Monument Digital Platform Pro Real 360 + PIN

A static, GitHub Pages-ready web app for **The Intelligibility Monument: Indonesian Voices in Global English**.

## Main Features

- Premium homepage and digital exhibition interface
- Clickable monument design-board hotspots
- **Photoreal 360° digital twin viewer** with multi-angle monument frames and clickable monument elements
- QR access for the platform, hotspots, provinces, voices, materials, and dossier
- 114 editable demo voice records: student, academic, and community voice slots for each Indonesian province
- Interactive province voice map
- Voice archive with search and filters
- Materials, symbolism, and digital-function records
- International recognition dossier generator
- Admin Studio protected with owner PIN
- Export/import JSON backup
- No API key required

## Admin PIN

Initial owner PIN: `2026`

After login, open **Admin Studio → PIN Security** to change the PIN. The PIN is stored locally in the browser. For a future public multi-user platform, upgrade to Firebase or Supabase authentication.

## GitHub Pages Deployment

1. Unzip this folder.
2. Upload the contents to your GitHub repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.webmanifest`
   - `README.md`
   - `assets/`
3. Go to repository **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose branch `main` and folder `/root`.
6. Open the generated GitHub Pages link.

## Data Note

This is a static app. Data entered in Admin Studio is saved in the browser using localStorage. Use **Export JSON Backup** regularly, especially before clearing browser data or deploying to another device.
