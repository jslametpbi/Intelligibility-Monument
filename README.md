# The Intelligibility Monument App

A GitHub Pages ready web app for **The Intelligibility Monument: Indonesian Voices in Global English**.

## Main integrated modules

- Monument homepage and digital twin preview
- Interactive monument model with hotspots
- Indonesian voice map
- Voice archive with browser speech playback and optional uploaded audio
- Materials and structure documentation
- QR station generator
- International recognition dossier generator
- Press release generator
- Admin studio with localStorage data management
- JSON export and import

## Deployment on GitHub Pages

1. Create a new GitHub repository, for example `Intelligibility-Monument`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings > Pages**.
4. Choose **Deploy from a branch**.
5. Select **main** branch and `/root` folder.
6. Open the GitHub Pages URL after deployment.

## Important notes

- No API key is required.
- Data is saved in the visitor browser through localStorage.
- For institutional use, export JSON regularly from the Admin Studio.
- The QR preview uses a free online QR image service when online and a built-in visual fallback when offline.
