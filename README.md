This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, copy the `.env.local.example` file to `.env` and fill in the environment variables:

```bash
cp .env.local.example .env
```

Then, install the dependencies:

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies

This project uses the following technologies:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Architecture

The architecture use App router from Next.js and the shared components are in the `src/shared` folder.

## Structure

The project is structured as follows:

- `__tests_/`: The tests of the application.
- `src/`: The source code of the application.
  - `shared/`: The shared components of the application. The main idea is to have components that can be reused in different pages or maybe create a design system, and libraries.
    - `styles/`: The global styles of the application.
    - `utils/`: Utility functions.
    - `components/`: The shared components.
      - `feature/`: The shared feature components where the business logic is implemented.
      - `ui/`: The shared UI components.
    - `hooks/`: The shared hooks of the application.
    - `context/`: The shared context of the application.
    - `CharacterContext`: The context to manage the character state to save in memory.
    - `FavoriteContext`: The context to manage the favorite state to save in memory.
    - `types/`: The shared types of the application.
    - `lib/`: The shared libraries of the application.
    - `services/`: Some constants and services to manage the API.
  - `app/`: The main pages of the application.

...

## Notes

- The project uses App router code architecture from Next.js.
- I created own design system to reuse components and styles using CSS Modules, css variables and shared components.
- I have opted for SSR (Server Side Rendering) to improve performance and cache data according to Next.js standards.
- I have used the context API to manage the state of the application. I have created two contexts: one for the characters and another for the favorites.
  - The character context gets the data from Props after SSR has fetched them, then it maintain the data in a cleaner fashion.
  - The favorite context is used to manage the favorite characters and shared them across pages. It synchronizes the data with the local storage. Initially loads favorites from local storage and any changes of favorites are synced back in local storage. I keep the favorites characters in object using key as id of character and value as character object itself, this will allow me to know if a character is favorite or not in O(1) time complexity. Otherwise, I would have to iterate over the array of favorites to find out if a character is favorite or not.
- I have implemented corresponding hooks to consume contexts.
- I implemented search logic in a hook to manage the search state applying debounce to improve performance and usability.
- I have tested some components and hooks to show each use cases.
