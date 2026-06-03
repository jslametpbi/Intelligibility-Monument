# The Intelligibility Monument Digital Platform Pro · Ultra-Realistic V4

This is the final V3 static deployment package for **The Intelligibility Monument: Indonesian Voices in Global English**.

## V3 Core Upgrade

- Ultra-realistic 360 digital twin section
- Six photoreal multi-angle monument frames inside `assets/model/`
- Clickable hotspot buttons on the 360 viewer
- Clickable hotspot buttons on the main design-board visual
- QR access for platform, hotspots, materials, provinces, voices, and dossier
- 114 voice framework from all Indonesian provinces
- PIN-protected Admin Studio
- Unique V3 file names: `styles-v3.css` and `app-v3.js`
- Cache-busting links in `index.html`

## Admin PIN

Initial owner PIN: `2026`

After login, open **Admin Studio → PIN Security** to change the PIN.

## Exact GitHub Pages Upload

1. Extract this ZIP.
2. Open the folder `intelligibility-monument-ultra-realistic-v3`.
3. Upload these contents to the root of your GitHub repository:
   - `index.html`
   - `styles-v3.css`
   - `app-v3.js`
   - `manifest.webmanifest`
   - `README.md`
   - `assets/`
4. Commit the changes.
5. Open your GitHub Pages link.
6. Hard refresh:
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + F5`

## Important

The old files `styles.css` and `app.js` are no longer required by this V3 package. The app now uses the V3 files directly to avoid browser cache problems.


## V4 Fixes
- Enlarged main monument in the 360 viewer.
- Easier rotation with drag, slider, Rotate Left, Rotate Right, and Auto Rotate.
- Larger QR modal for the selected spot.
- Improved cache-safe deployment using app-v4.js and styles-v4.css.
