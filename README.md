# 🕰️ Reverse Clock 🌌

[![React Version](https://img.shields.io/badge/react-^19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-^5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind_css-^3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/vite-^6.3.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)

**Dive into the abyss of time with "Reverse Clock" — a web application that uniquely shows how much time is left until the new day, wrapped in an atmosphere of ancient mysteries and cosmic dread.**

## ✨ Key Features

*   **⏳ Reverse Countdown:** Visually displays the hours and minutes remaining until midnight (in HH : MM format).
*   **↔️ Horizontal Clock Face:** A unique vintage-style horizontal dial with a moving hand, symbolizing the passage of the day from 00:00 to 23:59.
*   **🖱️ Interactive Hand:**
    *   Clicking the clock hand displays a panel with the **current system time** (HH : MM : SS), updated every second.
    *   A second click hides the panel.
*   **📅 Date Display:** Shows the current date in DD/TDM DayOfWeek format (where TDM is the total days in the month).
*   **🎨 Atmospheric "Eldritch/Abyssal" Design:**
    *   A carefully selected color palette (`primordial-parchment`, `abyssal-stone`, `eldritch-bronze`) and fonts (`Cinzel Decorative`, `Old Standard TT`) create a dark and mysterious atmosphere.
    *   A dynamic background with "cosmic nebula" and "flickering campfire light" effects enhances immersion.
*   **🚀 PWA (Progressive Web App):**
    *   Installable on devices.
    *   Offline functionality thanks to resource caching.
*   **📱 Responsive Design:** Displays correctly on various devices and screen sizes.
*   **♿ Accessibility:** Use of ARIA attributes to improve interaction with assistive technologies.

## 🕰️ How It Works

The application performs the following calculations every minute (for the countdown) and every second (for system time, if displayed):

1.  **Remaining Time:** The difference between the current time and midnight of the next day.
2.  **Hand Position:** The percentage of time elapsed since the beginning of the current day (00:00). The hand moves smoothly from left to right.
3.  **Current Date:** Formatting the current date for display.
4.  **System Time (on demand):** When the clock hand is clicked, an interval is started that updates the display of the current system time every second.

## 🎨 Aesthetics and Theme

The application's design is inspired by themes of ancient manuscripts, cosmic depths, and mysterious rituals. The "Eldritch/Abyssal" color scheme uses deep, rich tones of stone, parchment, and bronze, creating the feel of an ancient artifact. The `Cinzel Decorative` font for headings and `Old Standard TT` for body text emphasize the vintage and slightly mystical character. The animated background adds dynamism and depth to the visual experience.

## 🛠️ Tech Stack

*   **Frontend:** React, TypeScript
*   **Styling:** Tailwind CSS (configured via CDN with a custom theme)
*   **Build and PWA:** Vite (with the `vite-plugin-pwa` plugin)
*   **Fonts:** Google Fonts (Cinzel Decorative, Old Standard TT)

## 📂 Project Structure

-   `public/`: Static assets (icons, `manifest.json`).
-   `src/`: Application source code.
    -   `components/`: UI components (clock face, hand, date, time display, etc.).
    -   `hooks/`: Custom React hooks (e.g., `useReverseClock` for clock logic).
    -   `constants.ts`: Application constants.
    -   `types.ts`: TypeScript type definitions.
    -   `App.tsx`: Root application component.
    -   `index.tsx`: React entry point.
-   `index.html`: Main HTML file.
-   `index.css`: Global styles and background animations.
-   `vite.config.ts`: Vite configuration.
-   `README.md`: Project information (this file).

## 🚀 Getting Started and Usage

1.  Open the application in your browser using the provided link.
2.  The application will automatically detect the current time and start the countdown.
3.  Enjoy the unique visual representation of time!
4.  Click on the triangular hand on the horizontal clock face to see the current system time.

## 📦 PWA Functionality

As a PWA, "Reverse Clock" offers:
-   **Installation:** You can add the application to your device's home screen for quick access.
-   **Offline Access:** Thanks to the Service Worker, essential resources are cached, allowing the application to work even without an internet connection (after the first load).

---

This project combines modern web technologies with a classic and mystical aesthetic to create a unique user experience.