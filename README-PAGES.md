# MaatriMithra page structure

Each main screen now has its own React component under `src/pages/`:

- `Home.jsx` – landing page
- `Dashboard.jsx` – ASHA dashboard overview
- `Mothers.jsx` – registered mother records and registration form
- `Vaccination.jsx` – vaccination review reminders
- `BabyCare.jsx` – postpartum and baby-care information
- `Notifications.jsx` – notifications and read/unread actions
- `Settings.jsx` – workspace preferences

Shared UI pieces such as the brand, page heading, notices, and mother rows are in `src/components/Shared.jsx`. `App.jsx` now primarily manages shared state, navigation, and the common sidebar/top bar.

## Run locally

From the project folder in VS Code terminal:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The app uses responsive layout rules and slightly larger text for readability.
