# React Social App

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

A React-based social networking application resembling popular platforms. This showcase project demonstrates essential features including user authentication, profile management, a dynamic news feed, a friendship system, and real-time updates. The app is designed with a responsive interface for seamless usage across various devices.

## Demo

Here is a working live demo : https://react-social-media-app-tau.vercel.app/

## Table of Contents

<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
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

**Scalability:** TypeScript, refactoring, and state management practices contribute to a scalable codebase.

**Maintainability:** Linting, formatting, and code organization make maintenance straightforward.

**User Experience:** Features like i18n, loading indicators, and implementation of accessibility practices enhance the overall user experience.

**Performance:** Reduced image sizes, special component rendering for mobile devices, loading external resources asynchronously as performance improvement practices and CI/CD automation contribute to a faster and more reliable application.

By adopting these best practices, I've created an application that is not only feature-rich but also scalable, easy to manage, and poised for future enhancements. Feel free to explore the branches.

## Project Folder Structure

react-social-media-app
├─ .github
│ └─ workflows
│ ├─ lint.yml
│ └─ release.yml
├─ .husky
│ ├─ commit
│ ├─ pre-commit
│ └─ \_
│ ├─ .gitignore
│ └─ husky.sh
├─ **tests**
└─ taskList.test.tsx
├─ cypress
│ ├─ downloads
│ ├─ e2e
│ │ └─ spec.cy.ts
│ ├─ fixtures
│ │ └─ example.json
│ └─ support
│ ├─ commands.ts
│ └─ e2e.ts
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

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Appendix

Any additional information goes here

## Authors

- [@octokatherine](https://www.github.com/octokatherine)

## Color Reference

| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Documentation

[Documentation](https://linktodocumentation)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

## Feedback

If you have any feedback, please reach out to us at fake@fake.com

## 🚀 About Me

I'm a full stack developer...

# Hi, I'm Katherine! 👋

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

## Other Common Github Profile Sections

👩‍💻 I'm currently working on...

🧠 I'm currently learning...

👯‍♀️ I'm looking to collaborate on...

🤔 I'm looking for help with...

💬 Ask me about...

📫 How to reach me...

😄 Pronouns...

⚡️ Fun fact...

## 🛠 Skills

Javascript, HTML, CSS...

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

## License

[MIT](https://choosealicense.com/licenses/mit/)

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)

## Roadmap

- Additional browser support

- Add more integrations

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Support

For support, email fake@fake.com or join our Slack channel.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Usage/Examples

```javascript
import Component from 'my-project';

function App() {
  return <Component />;
}
```

## Used By

This project is used by the following companies:

- Company 1
- Company 2

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Berk YASAR**

- Github: [@berkysr](https://github.com/berkysr)
- LinkedIn: [@berkysr](https://linkedin.com/in/berkysr)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/berkysr/react-social-media-app/issues).

## Show your support

Give a ⭐️ if this project helped you!

```

```
