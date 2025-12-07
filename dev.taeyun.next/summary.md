# Tech Stack and Features Summary

This document provides a summary of the technical stack and features of this project.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) - A React framework for production-grade applications.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
*   **UI Library:** [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   **Styling:**
    *   [Styled-components](https://styled-components.com/) - A library for using CSS-in-JS. It is used for component-level styling and theming.
    *   [Sass/SCSS](https://sass-lang.com/) - A CSS preprocessor used for global styles.
    *   [Font Awesome](https://fontawesome.com/) - Used for icons.
*   **Animation:**
    *   [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) - A professional-grade animation library.
    *   [react-lottie](https://github.com/chenqingspring/react-lottie) - A React component for Lottie animations.
    *   [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - A library for triggering animations on scroll.
*   **Build & Development:**
    *   [Webpack](https://webpack.js.org/) - Used by Next.js for bundling modules. The configuration is customized to handle SVG files as React components using [@svgr/webpack](https://react-svgr.com/docs/webpack/).
    *   [Babel](https://babeljs.io/) - A JavaScript compiler.
    *   [ESLint](https://eslint.org/) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
    *   [@next/bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer) - Used to visualize the size of webpack output files.

## Features

*   **Single-page portfolio website:** The website is designed as a single page with multiple sections.
*   **Component-based architecture:** The UI is broken down into reusable components, organized by feature.
*   **Responsive design:** The application is designed to work on different screen sizes, with media queries managed via the styled-components theme.
*   **Sections:**
    *   **Hero:** The main landing section.
    *   **Intro:** An introduction section.
    *   **Character/Skills:** A section to display skills or personal attributes.
    *   **Experience:** A section to list work experience.
    *   **Projects:** A section to showcase projects.
*   **Animations:**
    *   Scroll-triggered animations using AOS.
    *   A Lottie animation is used as a scroll indicator.
    *   GSAP is included for more complex animations.
*   **"Scroll to top" functionality:** A button that allows the user to easily scroll back to the top of the page.
*   **Full-page scrolling:** The `@fullpage/react-fullpage` library is included, suggesting that the site may have a full-page scrolling experience.
*   **SVG Support:** SVGs can be imported and used as React components.
