# Architecture Overview

This document provides a comprehensive overview of the Spark Template's architecture, structure, and design decisions.

## 🏗️ Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | UI library for building user interfaces |
| **TypeScript** | 5.7.2 | Type-safe JavaScript superset |
| **Vite** | 7.2.6 | Build tool and development server |
| **Tailwind CSS** | 4.1.11 | Utility-first CSS framework |
| **GitHub Spark** | >=0.43.1 | GitHub's application framework |

### UI Component Libraries

- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Icon library
- **Phosphor Icons** - Additional icon set
- **Heroicons** - Icon collection

### State & Data Management

- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Additional Libraries

- **Framer Motion** - Animation library
- **Recharts** - Charting library
- **date-fns** - Date utility library
- **Octokit** - GitHub API client
- **Marked** - Markdown parser
- **Three.js** - 3D graphics library

## 📁 Directory Structure

```
spark-template/
│
├── .devcontainer/          # Dev container configuration
├── .github/                # GitHub workflows and templates
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   └── ui/            # Pre-built UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── dialog.tsx
│   │       └── ...        # 40+ components
│   │
│   ├── hooks/             # Custom React hooks
│   │   └── use-mobile.ts
│   │
│   ├── lib/               # Utility functions and helpers
│   │   └── utils.ts
│   │
│   ├── styles/            # CSS and styling
│   │   └── theme.css
│   │
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── ErrorFallback.tsx  # Error boundary fallback
│   ├── index.css          # Global styles
│   ├── main.css           # Main stylesheet
│   └── vite-end.d.ts      # TypeScript declarations
│
├── docs/                   # Documentation
│   ├── README.md
│   ├── GETTING_STARTED.md
│   ├── ARCHITECTURE.md
│   └── ...
│
├── public/                 # Static assets (if created)
│
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind configuration
├── components.json        # Shadcn UI configuration
├── theme.json             # Theme configuration
├── spark.meta.json        # Spark metadata
├── index.html             # HTML entry point
│
├── README.md              # Project overview
├── SECURITY.md            # Security policy
├── LICENSE                # MIT License
└── .gitignore             # Git ignore rules
```

## 🎨 Architecture Patterns

### Component Architecture

The template follows a **component-based architecture** with clear separation of concerns:

```
┌─────────────────────────────────────┐
│         Application Layer           │
│            (App.tsx)                │
└───────────┬─────────────────────────┘
            │
            ├──► Feature Components
            │    (Business logic)
            │
            ├──► UI Components
            │    (Presentational)
            │
            └──► Utilities & Hooks
                 (Shared logic)
```

### Component Types

1. **UI Components** (`src/components/ui/`)
   - Pre-built, reusable components
   - Based on Radix UI primitives
   - Styled with Tailwind CSS
   - Fully accessible and type-safe

2. **Feature Components** (To be added by developers)
   - Business logic components
   - Composed from UI components
   - Handle specific application features

3. **Layout Components** (To be added as needed)
   - Page layouts
   - Navigation components
   - Structural elements

## 🔌 Module System

### Import Aliases

The project uses TypeScript path mapping for cleaner imports:

```typescript
// Instead of: import { Button } from '../../components/ui/button'
import { Button } from '@/components/ui/button'
```

Configuration in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

And `vite.config.ts`:
```typescript
{
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  }
}
```

### Module Structure

```
@/                          # Root alias
├── components/ui/          # UI components
├── components/             # Feature components
├── hooks/                  # Custom hooks
├── lib/                    # Utilities
└── styles/                 # Styles
```

## 🎯 Design Principles

### 1. Minimal Starting Point

The template provides a minimal foundation, allowing developers to:
- Add only what they need
- Avoid unnecessary complexity
- Start with a clean slate
- Scale based on requirements

### 2. Type Safety

TypeScript is used throughout for:
- Compile-time error checking
- Better IDE support
- Self-documenting code
- Reduced runtime errors

### 3. Component Composition

Components are designed for composition:
- Small, focused components
- Props-based customization
- Flexible styling
- Easy to combine

### 4. Accessibility First

All UI components prioritize accessibility:
- Radix UI ensures ARIA compliance
- Keyboard navigation support
- Screen reader friendly
- WCAG 2.1 guidelines

### 5. Developer Experience

Focus on developer productivity:
- Fast hot module replacement (HMR)
- Clear error messages
- Comprehensive TypeScript support
- Intuitive component API

## 🔄 Data Flow

### State Management Strategy

```
┌──────────────┐
│   UI Layer   │  ◄──── Props/Events ────┐
└──────┬───────┘                         │
       │                                 │
       ▼                                 │
┌──────────────┐                  ┌──────────────┐
│  Local State │                  │  Global State│
│  (useState)  │                  │  (Context)   │
└──────┬───────┘                  └──────┬───────┘
       │                                 │
       ▼                                 ▼
┌──────────────────────────────────────────────┐
│            Server State                      │
│         (React Query)                        │
└──────────────────────────────────────────────┘
```

### Recommended Patterns

1. **Local State** - Use `useState` for component-specific state
2. **Form State** - Use React Hook Form for forms
3. **Server State** - Use React Query for API data
4. **Global State** - Use React Context or add Zustand/Redux

## 🔧 Build System

### Vite Configuration

The build system uses Vite with several plugins:

```typescript
plugins: [
  react(),                    // React support with SWC
  tailwindcss(),             // Tailwind CSS integration
  createIconImportProxy(),   // Phosphor icon proxy
  sparkPlugin(),             // GitHub Spark plugin
]
```

### Build Process

```
Source Code (TypeScript/TSX)
         ↓
TypeScript Compilation
         ↓
React Transformation (SWC)
         ↓
Bundle Optimization
         ↓
Asset Processing
         ↓
Production Build (dist/)
```

### Development vs Production

| Aspect | Development | Production |
|--------|-------------|------------|
| Bundling | On-demand (ESM) | Pre-bundled |
| Source Maps | Full | External |
| Minification | None | Full |
| Tree Shaking | Minimal | Aggressive |
| HMR | Enabled | N/A |

## 🎨 Styling Architecture

### Tailwind CSS Setup

1. **Configuration** - `tailwind.config.js`
2. **Theme** - `src/styles/theme.css`
3. **Global Styles** - `src/index.css` and `src/main.css`
4. **Component Styles** - Inline Tailwind classes

### CSS Organization

```
Tailwind Utilities (Atomic CSS)
         +
Component Classes (CVA)
         +
Custom CSS Variables (Theme)
         =
Complete Styling System
```

### Class Variance Authority (CVA)

Components use CVA for variant management:

```typescript
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "variant-classes",
        outline: "outline-classes",
      },
    },
  }
)
```

## 🔐 Error Handling

### Error Boundary

The application includes a global error boundary:

```typescript
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <App />
</ErrorBoundary>
```

This catches React errors and provides:
- User-friendly error display
- Error logging capability
- Graceful degradation

## 📦 Dependency Management

### Workspace Configuration

The project uses npm workspaces:

```json
{
  "workspaces": {
    "packages": ["packages/*"]
  }
}
```

This allows for monorepo support if needed.

### Key Dependencies

- **Production dependencies** - Required at runtime
- **Dev dependencies** - Build and development tools
- **Peer dependencies** - Required by packages

## 🚀 Performance Considerations

### Optimization Strategies

1. **Code Splitting** - Lazy load routes and heavy components
2. **Tree Shaking** - Remove unused code
3. **Asset Optimization** - Compress images and fonts
4. **Bundle Analysis** - Use Vite's build analyzer
5. **React Query** - Automatic caching and deduplication

### Recommended Optimizations

```typescript
// Lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'))

// Memoization
const MemoizedComponent = memo(Component)

// React Query caching
const { data } = useQuery({
  queryKey: ['key'],
  queryFn: fetchData,
  staleTime: 1000 * 60 * 5, // 5 minutes
})
```

## 🔄 Future Extensibility

The architecture supports easy addition of:

- **Routing** - Add React Router
- **State Management** - Add Zustand or Redux
- **API Layer** - Extend Octokit usage
- **Testing** - Add Jest or Vitest
- **E2E Testing** - Add Playwright or Cypress
- **Authentication** - Add auth provider
- **Internationalization** - Add i18n support

## 📚 Related Documentation

- [Getting Started](GETTING_STARTED.md) - Setup and installation
- [Components](COMPONENTS.md) - UI components guide
- [Configuration](CONFIGURATION.md) - Configuration details
- [Development](DEVELOPMENT.md) - Development workflow

---

[← Back to Documentation](README.md) | [Next: Components Guide →](COMPONENTS.md)
