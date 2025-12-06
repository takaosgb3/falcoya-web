# Code Style and Conventions

## Language
- **Primary:** JavaScript (ES6+)
- **Note:** TypeScript is NOT used despite being in devDependencies

## File Naming
- **Files:** kebab-case (e.g., `falco-plugin-development-days105-110.js`)
- **Components:** PascalCase for component names
- **Utilities:** camelCase (e.g., `languageUtils.js`)

## Code Style

### React Components
- Use **functional components** with hooks
- Export default for page components
- Named exports for utilities

Example:
```javascript
import { useState, useEffect } from 'react'
import { useLanguage } from '../utils/languageUtils'

export default function Home() {
  const [language, setLanguage] = useLanguage()
  // component logic
  return (/* JSX */)
}
```

### Styling
- **CSS Variables** for theming (defined in `:root`)
- **Global CSS** in `styles/globals.css`
- **Inline styles** for dynamic/component-specific styling
- CSS custom properties naming: `--kebab-case`

Example CSS variables:
```css
:root {
  --primary-blue: #0EA5E9;
  --primary-purple: #A855F7;
  --text-primary: #1F2937;
}
```

### State Management
- React hooks (useState, useEffect, useRef)
- Custom hooks for shared logic (e.g., `useLanguage`)
- localStorage for persistence

### Multi-language Support
- Content objects with `ja` and `en` keys
- Custom hook `useLanguage()` for language state
- localStorage key: `'falcoya-language'`
- Auto-detection based on browser language

## ESLint Configuration
- Extends: `next/core-web-vitals`
- Special override for blog pages: `react/no-unescaped-entities: off`

## Code Organization
- Component logic co-located with pages (no separate components directory)
- Utilities in `/utils` directory
- Shared constants defined within files
- Multi-language content objects defined inline

## Comments
- Japanese comments are common in the codebase
- Use comments to explain complex logic or business decisions
- Keep comments concise and meaningful