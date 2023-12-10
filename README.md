# React Social App

<section>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Github Code Size" src="https://img.shields.io/github/languages/code-size/berkysr/react-social-media-app">
  <a href="https://choosealicense.com/licenses/mit/" target="_blank" alt="MIT License">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</section>

A React-based social networking application resembling popular platforms. This showcase project demonstrates essential features including user authentication, profile management, a dynamic news feed, a friendship system, and real-time updates. The app is designed with a responsive interface for seamless usage across various devices.

## Demo

Here is a working live demo : https://react-social-media-app-tau.vercel.app/

## Table of Contents

<ol>
    <li>
      <a href="#tech-stack">Tech Stack</a>
    </li>
    <li><a href="#features">Features</a></li>
    <li>
      <a href="#motivation-of-choices-on-implementation">Motivation of Choices on Implementation</a>
      <ul>
        <li><a href="#project-structure-overview">Project Structure Overview</a></li>
        <li><a href="#hierarchical-organization">Hierarchical Organization</a></li>
        <li><a href="#test-and-e2e-directory">Test and E2E Directory</a></li>
        <li><a href="#configuration-files">Configuration Files</a></li>
        <li><a href="#styling-and-tooling">Styling and Tooling</a></li>
        <li><a href="#overall-benefits">Overall Benefits</a></li>
      </ul>
    </li>
    <li><a href="#project-folder-structure">Project Folder Structure</a></li>
    <li><a href="#installation">Installation</a></li>
    <li>
    <a href="#usage">Usage</a>
      <ul>
        <li><a href="#development">Development</a></li>
        <li><a href="#build">Build</a></li>
        <li><a href="#unit-testing">Unit Testing</a></li>
        <li><a href="#end-to-end-testing-with-cypress">End-to-End Testing with Cypress</a></li>
        <li><a href="#code-linting">Code Linting</a></li>
        <li><a href="#stylelint">Stylelint</a></li>
        <li><a href="#ejecting-configuration">Ejecting Configuration</a></li>
      </ul>
    </li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#license">License</a></li>
</ol>

## Tech Stack

This project is built on the foundation of best practices for React app development, ensuring scalability, maintainability, and a seamless development experience. The branches in this repository reflect a thoughtful approach to feature implementation, refactoring, and maintenance, all aimed at crafting a robust and user-friendly application.

## Features

- **TypeScript implementation:** Introduces TypeScript for enhanced type checking and code organization.
- **i18n implementation:** Implements internationalization for multi-language support, improving accessibility and user experience.
- **Google login, Form validations, Protected routes, Redux state management:** Enhances user authentication, form handling, and overall application state management.
- **Git Actions:** CI/CD automation, developer friendly continous integration and continous development pipeline implementations.
- **ESlint, Prettier implementation, Husky Precommit implementation, StyleLint:** Implements linting, formatting, and pre-commit hooks for code consistency.
- **Generic error message handling:** Enhances error handling.
- **Environment variables, a11y support, dynamic URL for profile pages:** Enhances configurability and user interaction possibilities.
- **API consumption, import aliases, and import order:** Utilizing free APIs, this application dynamically fetches random posts from https://dummyapi.io/data/v1/post, generates random user data through https://randomuser.me/api, and implements login authentication via https://dummyjson.com/auth/login. This modular approach allows easy adaptation to alternative API endpoints, showcasing versatility, simplifying development. Using import aliases and, import order introduces versatility, ease of development, and improved code organization.

## Motivation of Choices on Implementation

#### Project Structure Overview

The chosen project folder structure for the "react-social-media-app" is a well-thought-out organization that reflects my commitment to scalability, maintainability, and efficient development practices. Here are the motivations behind key choices made in the implementation:

#### Hierarchical Organization

**Components Directory:** The 'components' directory is structured hierarchically, promoting a modular approach to development. Each sub-directory represents a specific feature or section, such as 'feed', 'topbar', 'shared', and 'mobile' contributing to code isolation and ease of navigation.

**Helpers Directory:** The 'helpers' directory consolidates utility functions, reducers, and selectors, offering a centralized location for shared logic. This separation aids in better code organization and maintainability.

**Pages Directory:** The 'pages' directory contains top-level components, each representing a distinct page of the application. This approach aligns with React best practices, facilitating clear separation of concerns.

**Public Directory:** The 'public' directory houses static assets and translations, providing a centralized location for resources that don't require compilation. The 'translations' sub-directory supports multi-language support with separate folders for each language.

#### Test and E2E Directory

**Tests Directory:** The '\_\_tests\_\_' directory follows a clear naming convention, making it easy to identify and execute unit tests. This approach ensures that testing is an integral part of the development process.

**Cypress Directory:** The 'cypress' directory contains end-to-end (E2E) testing configurations and specifications.

#### Configuration Files

**.github Directory:** The '.github' directory holds workflows for linting and release processes. This helps automate code quality checks and streamline the release pipeline.

**.husky Directory:** The '.husky' directory configures Git hooks, providing automated checks and tasks at various stages of the development process. The 'commit' and 'pre-commit' directories align with best practices for version control.

#### Styling and Tooling

**SCSS and Tailwind:** The use of '.scss' files and 'tailwind.config.js' indicates a combination of SCSS for styling components and Tailwind CSS for utility-first styling. This allows for a flexible and maintainable approach to styling.

**Environment Configuration:** The inclusion of '.env' files signifies a structured approach to environment-specific configurations, ensuring consistency across development, testing, and production environments.

#### Overall Benefits

**Scalability:** TypeScript, refactoring, and state management practices contribute to a scalable codebase.

**Maintainability:** Linting, formatting, and code organization make maintenance straightforward.

**User Experience:** Features like i18n, loading indicators, and implementation of accessibility practices enhance the overall user experience.

**Performance:** Reduced image sizes, special component rendering for mobile devices, loading external resources asynchronously as performance improvement practices and CI/CD automation contribute to a faster and more reliable application.

**Versatility and Ease of Development:** The chosen structure facilitates modular development, making it easy to extend and adapt the application. The use of TypeScript, Redux, and clear directory organization promotes ease of development.

**Improved Organization and Readability:** The project structure enhances code organization, making it easier for developers to locate and understand various components, utilities, and configurations. This contributes to improved readability and maintainability.

**Adaptability to Change:** By adhering to best practices and maintaining a modular structure, the application is well-prepared for future changes, updates, and feature additions. The organized codebase allows for seamless adaptation to evolving requirements.

By adopting these best practices, I've created an application that is not only feature-rich but also scalable, easy to manage, and poised for future enhancements. Feel free to explore the branches.

## Project Folder Structure

```
react-social-media-app
├─ .github
│ └─ workflows
│ ├─ lint.yml
│ └─ release.yml
│ └─ unit-test.yml
├─ .husky
│ ├─ commit
│ ├─ pre-commit
│ └─ _
│ ├─ .gitignore
│ └─ husky.sh
├─ __tests__
│ ├─ helpers
│ │ └─ utils
│ │  ├─ commonFunctions.test.ts
│ │  └─ validationFunctions.test.ts
├─ cypress
│ ├─ downloads
│ ├─ e2e
│ │ └─ login.cy.ts
│ ├─ fixtures
│ │ └─ example.json
│ ├─ support
│ │ ├─ commands.ts
│ │ └─ e2e.ts
│ └─ tsconfig.json
├─ public
│ ├─ index.html
│ └─ translations
│ ├─ en
│ │ ├─ common.json
│ │ └─ error.json
│ └─ tr
│ ├─ common.json
│ └─ error.json
├─ src
│ ├─ App.tsx
│ ├─ components
│ │ ├─ feed
│ │ │ ├─ Feed.tsx
│ │ │ ├─ Post.tsx
│ │ │ └─ Share.tsx
│ │ ├─ HomePageRightBar.tsx
│ │ ├─ mobile
│ │ │ └─ SlidingMenu.tsx
│ │ ├─ profile
│ │ │ ├─ Following.tsx
│ │ │ ├─ ProfilePageRightBar.tsx
│ │ │ └─ UserInfo.tsx
│ │ ├─ RightbarContainer.tsx
│ │ ├─ shared
│ │ │ ├─ Alert.tsx
│ │ │ ├─ Icon.tsx
│ │ │ ├─ InputField.tsx
│ │ │ ├─ Loading.tsx
│ │ │ ├─ NavbarMenuElement.tsx
│ │ │ └─ ProfileLink.tsx
│ │ ├─ Sidebar.tsx
│ │ └─ topbar
│ │ ├─ FriendRequests.tsx
│ │ ├─ LanguageSelectorPopover.tsx
│ │ ├─ ProfileSettingsPopover.tsx
│ │ ├─ SelectLanguage.tsx
│ │ ├─ Topbar.tsx
│ │ └─ TopbarPopover.tsx
│ ├─ helpers
│ │ ├─ api
│ │ │ ├─ companies.ts
│ │ │ ├─ posts.ts
│ │ │ ├─ profileDetails.ts
│ │ │ └─ users.ts
│ │ ├─ enums
│ │ │ └─ enums.ts
│ │ ├─ reducers
│ │ │ ├─ APIRequestReducer.ts
│ │ │ └─ appReducer.ts
│ │ ├─ selectors
│ │ │ ├─ APIRequestSelector.ts
│ │ │ └─ appSelector.ts
│ │ ├─ translationTool.ts
│ │ ├─ types
│ │ │ ├─ api.ts
│ │ │ ├─ company.ts
│ │ │ ├─ general.ts
│ │ │ ├─ login.ts
│ │ │ ├─ post.ts
│ │ │ ├─ profileDetail.ts
│ │ │ ├─ state.ts
│ │ │ └─ user.ts
│ │ └─ utils
│ │ ├─ commonFunctions.tsx
│ │ ├─ constants.ts
│ │ ├─ protectedRoute.tsx
│ │ ├─ storageFunctions.ts
│ │ ├─ SVG.tsx
│ │ └─ validationFunctions.ts
│ ├─ i18n.ts
│ ├─ index.html
│ ├─ index.scss
│ ├─ index.tsx
│ ├─ pages
│ │ ├─ Home.tsx
│ │ ├─ Login.tsx
│ │ ├─ Profile.tsx
│ │ └─ WildCard.tsx
│ └─ store.ts
├─ .env
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignorerc
├─ .prettierrc
├─ .stylelintrc
├─ cypress.config.ts
├─ package-lock.json
├─ package.json
├─ craco.config.js
├─ tailwind.config.js
├─ tsconfig.json
├─ README.md
├─ LICENSE.md
```

## Installation

### Prerequisites

Before proceeding with the installation, ensure you have the following prerequisites installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/berkysr/react-social-media-app.git
```

2. Navigate to the project directory:

```bash
  cd react-social-media-app
```

3. Install project dependencies:

```bash
  npm install
```

## Usage

### Development

To run the application in development mode:

```bash
  npm start
```

This command starts the development server using Craco, which is a configuration layer for Create React App. Open your browser and visit http://localhost:3000 to view the application.

### Build

To build the application for production on Linux:

```bash
  npm run build
```

To build the application for production on Windows:

```bash
  npm run windows:build
```

This command creates a production-ready build in the build directory.

### Unit Testing

Run unit tests using:

```bash
  npm run test
```

### End-to-End Testing with Cypress

To open the Cypress Test Runner:

```bash
  npm run cypress:open
```

This command opens the Cypress Test Runner, allowing you to run end-to-end tests interactively.

### Code Linting

Lint your TypeScript code with:

```bash
  npm run lint
```

Fix linting issues automatically:

```bash
  npm run lint-fix
```

### Stylelint

Lint your SCSS styles:

```bash
  npm run stylelint
```

### Ejecting Configuration

If needed, you can eject the configuration with:

```bash
  npm run eject
```

Note: Ejecting is a one-way operation and should be done with caution.

## Screenshots

### Mobile Screenshots

<section style="display: flex; height: 433px; padding: 5px;">
<img alt="Mobile Screenshots" src="/public/assets/github-screenshots/react-social-app-mobile-screenshot.png">
</section>

### Desktop Screenshot

<section style="display: flex; height: 461px; padding: 5px;">
<img alt="Desktop Home Page" src="/public/assets/github-screenshots/react-social-app-desktop-home.jpg">
</section>

## Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/berkysr/)

## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See LICENSE\.md for more information.
