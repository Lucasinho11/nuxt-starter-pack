# Nuxt.js Starter Pack with Pinia

This Starter Pack project is designed to help you quickly get started with Nuxt.js using Pinia for state management, TypeScript for static typing, and services for API calls with helpers.

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Installation

1. Clone this repository:

   ```bash
   git clone <REPO_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Install dependencies:

   ```bash
   # pnpm
   pnpm install

   # yarn
   yarn install

   # bun
   bun install
   ```

## Configuration

No additional configuration is required. The project comes pre-configured with Nuxt.js, Pinia, TypeScript, and services for API calls.

## Usage

- Start the development server:

  ```bash
  # npm
  npm run dev

  # pnpm
  pnpm run dev

  # yarn
  yarn dev

  # bun
  bun run dev
  ```

- Access your application in your browser at `http://localhost:3000`.

## Production

    Build the application for production:

        ```bash
        # npm
        npm run build

        # pnpm
        pnpm run build

        # yarn
        yarn build

        # bun
        bun run build
        ```

    Locally preview production build:

        ```bash
        # npm
        npm run preview

        # pnpm
        pnpm run preview

        # yarn
        yarn preview

        # bun
        bun run preview
        ```

## Project Structure

- **`assets/`**: Contains static assets like images or CSS files.
- **`components/`**: Includes reusable Vue.js components.
- **`layouts/`**: Contains application layouts.
- **`pages/`**: Contains Nuxt.js application routes.
- **`plugins/`**: Includes application plugins.
- **`interfaces/`**: Contains TypeScript interfaces used in the project.
- **`stores/`**: Includes application state modules managed by Pinia.
- **`server/`**: Contains files for API calls.
- **`services/`**: Contains application services, including the fetch service.

## Contribution

Contributions are welcome! If you'd like to improve this Starter Pack or fix any issues, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
