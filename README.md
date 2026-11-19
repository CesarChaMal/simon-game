# Simon

A Simon-style memory game built with React and Vite. Watch the color sequence and repeat it in the same order. Each round adds one color. If you make a mistake, restart the game and try again.

## Requirements

- Node.js and npm

## Installation

Clone the repository and open the project directory. Then install the dependencies:

```bash
npm install
```

## Run in development

```bash
npm run dev
```

Open the URL printed by Vite in your browser, usually `http://localhost:5173/`.

## Install on Android

The app is available at [simon-game-ruby-three.vercel.app](https://simon-game-ruby-three.vercel.app/) and can be installed from Chrome:

1. Open the link in Chrome on your Android phone.
2. Open the three-dot menu and select **Install app** or **Add to Home screen**.
3. Confirm the installation. Simon will appear on your home screen.

After the first visit, the app can also open offline.

## Deploy to Vercel

1. Push the project to [GitHub](https://github.com/cesarchamal/simon-game).
2. Sign in to [vercel.com](https://vercel.com) with your GitHub account.
3. Select **Add New → Project**.
4. Find the `cesarchamal/simon-game` repository and select **Import**. If it does not appear, grant Vercel access to the repository in your GitHub settings.
5. Make sure Vercel detects **Vite**. If you need to configure it manually, use:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Select **Deploy** and wait for the build to finish.
7. Open the domain Vercel provides. You can also use [simon-game-ruby-three.vercel.app](https://simon-game-ruby-three.vercel.app/).

If the project is already connected to Vercel, every `git push` to the configured branch automatically deploys a new version.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production app in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks the code with Oxlint |

## How to play

1. Select **Start game**.
2. Watch the pads light up.
3. Repeat the sequence by pressing the colors in the same order.
4. Each round adds one color. If you make a mistake, select **Restart game** and try again.

## Technologies

- React
- Vite
- Oxlint

## Author

Made by [cesarchamal](https://github.com/cesarchamal).
