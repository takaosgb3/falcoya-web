# Suggested Commands

## Development Commands

### Start Development Server
```bash
npm run dev
```
Starts Next.js development server on http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates an optimized production build

### Start Production Server
```bash
npm start
```
Starts the production server (requires running `npm run build` first)

### Lint Code
```bash
npm run lint
```
Runs ESLint to check for code quality issues

### Export Static Site
```bash
npm run export
```
Builds and exports the site as static HTML (runs `next build && next export`)

## Package Management

### Install Dependencies
```bash
npm install
```

### Add New Dependency
```bash
npm install <package-name>
```

### Add Dev Dependency
```bash
npm install --save-dev <package-name>
```

## Git Commands

### Check Status
```bash
git status
```

### Create and Switch Branch
```bash
git checkout -b <branch-name>
```

### Commit Changes
```bash
git add .
git commit -m "commit message"
```

### Push to Remote
```bash
git push origin <branch-name>
```

### Merge from staging
```bash
git merge staging
```

## Deployment

The project is configured for automatic deployment on Vercel:
- Push to `main` branch triggers production deployment
- Push to `staging` branch (if configured) triggers preview deployment
- Vercel configuration is in `vercel.json`

## System Commands (macOS/Darwin)

### List Files
```bash
ls -la
```

### Search in Files
```bash
grep -r "search term" .
```

### Find Files
```bash
find . -name "*.js"
```

### View File Content
```bash
cat filename.js
```