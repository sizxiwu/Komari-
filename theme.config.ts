
/**
 * Komari Theme Registration — Furina (Hydro Stage)
 * Usage:
 *   import { installFurinaTheme } from "./components/effects";
 *   installFurinaTheme();
 *   // Ensure CSS is imported once in your app root:
 *   import "./theme.css";
 */
export const komariTheme = {
  id: "furina-hydro-stage",
  name: "Furina — 水之舞台 · 浮光",
  author: "ChatGPT x 柠若",
  version: "1.0.0",
  darkDefault: true,
  assets: {
    css: "./theme.css",
    sounds: {
      click: "./sounds/click.wav",
      open: "./sounds/open.wav",
      notify: "./sounds/notify.wav",
    },
    artwork: "./furina/standin.svg",
  },
};
