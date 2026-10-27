# MaatriMithra

A React + Vite maternal and child healthcare interface with a public landing page and ASHA Worker workspace.

## Run locally
1. Install Node.js (Node 22 works for the UI; newer Firebase packages may require Node 24.12+ if you later use Firebase).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed in the terminal.

## Notes
- The landing page opens first. Use **ASHA Worker Login** or **Explore ASHA Dashboard** to enter the workspace.
- The current interface uses local in-memory sample records. It is not connected to a production database or messaging service.
- Do not enter real patient information until authentication, secure database storage, and access controls are configured.
