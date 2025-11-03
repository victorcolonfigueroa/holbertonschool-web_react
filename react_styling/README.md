# React Styling

A concise example repository demonstrating common styling techniques in React applications.

## Overview
This project shows how to apply styles using:
- Plain CSS
- CSS Modules
- Sass / SCSS
- Styled Components (CSS-in-JS)
- Inline styles and style objects

## Prerequisites
- Node.js (>= 14)
- npm or yarn

## Install
```bash
# using npm
npm install

# or using yarn
yarn
```

## Available scripts
```bash
npm start      # start dev server
npm run build  # create production build
npm test       # run tests
```

## Project structure
```
src/
    components/      # reusable components with different styling approaches
    pages/           # app pages
    styles/          # global CSS, variables, and SCSS files
    App.js
    index.js
README.md
```

## Usage tips
- Prefer CSS Modules or styled-components for component-scoped styles.
- Use global CSS for layout and utility classes.
- Keep theming variables in a single file (CSS vars or a theme object for CSS-in-JS).

## Contributing
Open issues or PRs for improvements or fixes. Keep changes focused and well-documented.

## License
MIT
