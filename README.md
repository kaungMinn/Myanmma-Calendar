
**Important**: The development server must run on port 5173 for the service worker to function properly. Ensure that port 5173 is available.
```


# Myanmar Calendar Admin Portal

A modern administrative dashboard for managing Myanmar traditional calendar data with public holiday tracking and management capabilities.



## Features

### 📅 Calendar Management

- **4-Month View**: Navigate through calendar months with an intuitive 4-month display
- **Holiday Tracking**: Public holidays clearly marked and highlighted throughout the calendar
- **Interactive Tooltips**: Hover over highlighted dates to see holiday names and details
- **5-Year Data Coverage**: Comprehensive holiday data from 2021-2026
- **Clean Grid Layout**: Proper date alignment with responsive design

### 🎨 User Interface

- **Modern Dashboard**: Clean, minimalist dashboard design using shadcn/ui components
- **Responsive Sidebar**: Collapsible navigation with smooth transitions
- **Dark Mode Support**: Built-in theme compatibility
- **Mobile-Friendly**: Fully responsive design for all screen sizes

### ⚡ Technical Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components with Tailwind CSS v4
- **State Management**: React Query (@tanstack/react-query)
- **Routing**: React Router v7
- **Form Handling**: React Hook Form with Zod validation
- **Code Quality**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm package manager (v10.23.0+)

### Installation

```bash
# Clone repository
git clone <repository-url>

# Navigate to project directory
cd htwettoe-admin-portal

# Copy environment variables
cp .env.example .env

# Install dependencies
pnpm install

# Start development server
pnpm dev

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build Storybook for production

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   └── dashboard/     # Dashboard-specific components
├── features/          # Feature-based modules
│   ├── dashboard/     # Dashboard pages
│   └── mm-calendar/   # Myanmar Calendar features
├── layouts/           # Layout components
├── constants/         # Application constants
├── utils/            # Utility functions
└── assets/           # Static assets
```

## Key Dependencies

### UI & Styling

- **shadcn/ui**: Modern, accessible UI components
- **Tailwind CSS v4**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Radix UI**: Low-level UI primitives

### Data & State

- **React Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: TypeScript-first schema validation
- **Axios**: HTTP client for API requests

### Development Tools

- **Storybook**: Component development and testing
- **ESLint**: Code quality and consistency
- **Husky**: Git hooks for quality control
- **MSW**: API mocking for development

## Calendar Features

The Myanmar Calendar system provides:

- Traditional Myanmar calendar dates
- Public holiday tracking and management
- Interactive date selection with holiday information
- Multi-year holiday data support
- Clean, intuitive user interface

## Development

### Code Style

- TypeScript for type safety
- ESLint with @antfu/eslint-config
- Prettier for code formatting
- Component-based architecture
- Git hooks for pre-commit checks

### UI Components

Built with shadcn/ui for consistent, accessible design:

- Cards, buttons, forms
- Navigation components
- Calendar components
- Responsive layouts

## Environment Variables

Create a `.env` file from `.env.example`:

```bash
VITE_CALENDAR_API_KEY=http://localhost:5173/api/v1
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting (`pnpm lint:fix`)
5. Submit a pull request

## License

[Your License Here]

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
import reactDom from "eslint-plugin-react-dom";
// eslint.config.js
import reactX from "eslint-plugin-react-x";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
