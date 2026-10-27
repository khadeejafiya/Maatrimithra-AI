# White screen troubleshooting

1. Open this folder (the one containing package.json) in VS Code.
2. In Terminal, run `npm install` and wait until it finishes.
3. Run `npm run dev` and open the exact localhost URL printed by Vite.
4. If the screen is still blank, open the browser developer tools (F12), choose Console, and read the first red error. That error identifies any remaining runtime problem.

This project intentionally keeps each screen in its own file under `src/pages/`; `src/App.jsx` handles navigation and shared state.
