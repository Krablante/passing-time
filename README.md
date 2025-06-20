# Reverse Clock

## Description

**Reverse Clock** is a Progressive Web Application (PWA) that displays, in an elegant vintage style, how much time is left until the end of the current day. Instead of a traditional clock movement, it shows a countdown, and a horizontal clock face with a moving hand visualizes the progress of the current day.

## Features

-   **Time Countdown:** Shows the hours and minutes remaining until midnight (HH : MM format).
-   **Horizontal Clock Face:** A unique vintage-style clock face along which a hand moves, indicating the elapsed part of the day (from 00:00 to 23:59).
-   **Date Display:** Shows the current date in DD/TD DayOfWeek format (where TD is the total days in the month).
-   **Vintage Design:** Carefully selected color palette (paper, dark wood, gold) and fonts create the atmosphere of an antique clock.
-   **PWA (Progressive Web App):**
    -   Installable on devices.
    -   Offline functionality thanks to resource caching.
-   **Responsive Design:** Displays correctly on various devices and screen sizes.
-   **Accessibility:** Basic ARIA attributes for improved accessibility.

## Tech Stack

-   **Frontend:** React, TypeScript
-   **Styling:** Tailwind CSS (configured via CDN)
-   **Build & PWA:** Vite (with the `vite-plugin-pwa` plugin)
-   **Fonts:** EB Garamond (Google Fonts)

## Project Structure

-   `public/`: Static assets (icons, `manifest.json`).
-   `src/`: Application source code.
    -   `components/`: UI components (clock face, hand, date, etc.).
    -   `hooks/`: Custom React hooks (e.g., `useReverseClock` for clock logic).
    -   `constants.ts`: Application constants.
    -   `types.ts`: TypeScript type definitions.
    -   `App.tsx`: Root application component.
    -   `index.tsx`: React entry point.
-   `index.html`: Main HTML file.
-   `vite.config.ts`: Vite configuration.
-   `README.md`: Project information (this file).

## How It Works

Every minute, the application calculates:
1.  **Remaining Time:** The difference between the current time and midnight of the next day.
2.  **Hand Position:** The percentage of time elapsed from the beginning of the current day (00:00) to its end. The hand moves from left to right.
3.  **Current Date:** Formats the current date for display.

This project demonstrates a combination of modern web development with classic aesthetics to create a unique user experience.