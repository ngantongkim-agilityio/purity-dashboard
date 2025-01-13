# **NEXTJS 15 PRACTICE
## Overview

- This document provides the requirements, technical stack and estimate detail features for Practice apply NextJS 15

## Timeline

- 7 days (01/13/2025 -  21/01/2025)

## Team size

- 1 Developer

## Target

- Understand and apply new features of NextJS 15
- Utilize NextUI to create and customize UI components that match the design.
- Build a web application that meets requirements
- Check and measure by PageSpeed as well

## Technologies

- [Next.js latest version (15.1.4)](https://nextjs.org/)
- [React latest version (19.0.0)](https://react.dev/)
- [Zod 3.23.8](https://zod.dev/)
- [NextUI](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Developer tools

- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitlint](https://commitlint.js.org/#/)
- [Husky](https://github.com/typicode/husky)
- [Storybook](https://storybook.js.org/)
- [jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vercel](https://vercel.com)

## Design 

- [Figma](https://www.figma.com/design/g7r1sI5WpdO7v4kigAOs65/Purity-UI-Dashboard---Chakra-UI-Dashboard-(Community)?node-id=0-1&p=f&t=KUohg66aetSJp6IK-0)

## Requirements

Build a Purity dashboard to manage authors:
- Support dark/light mode
- User can register new account
- User can login with created account
- User can see main dashboard page
- User can see a list of authors
  - User can add/search/edit/delete a author

## Development environment

- Visual Studio Code (Text editor)
- GitLab (Save and management source code)

## Live demo

## Project structure

```shell
.
├── .husky
├── .storybook
├── public
├── src
│   ├── actions
│   ├── app
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── themes
│   ├── types
│   ├── utils
├── .editorconfig
├── .gitignore
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
```


## How to run?

### Prerequisites

Make sure you install packages with correct version below:

- [node v20.0.0+](https://nodejs.org/en/download/package-manager)
- [pnpm 9.6.0+](https://pnpm.io/installation)

- **Note:**
  - Please add `.env` into root of project source code, refer `.env.sample`.

### Get source code

| Command                                                                           | Action                      |
| :-------------------------------------------------------------------------------- | :-------------------------- |
| `$ git clone https://gitlab.asoft-python.com/ngan.tongkim/nextjs-training.git` | Clone Repository with HTTPS |
| `$ git clone git@gitlab.asoft-python.com:ngan.tongkim/nextjs-training.git`     | Clone Repository with SSH   |
| `$ cd purity-dashboard`                                                          | Redirect to folder          |

### Build and Run app

| Command            | Action                                     | Port                  |
| :----------------- | :----------------------------------------- | :-------------------- |
| `$ pnpm install`   | Install packages dependencies              | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode   | N/A                   |
| `$ pnpm start`     | Starts the application in production mode. | http://localhost:3000 |
| `$ pnpm dev`       | Run the app in development mode            | http://localhost:3000 |
