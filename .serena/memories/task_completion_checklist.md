# Task Completion Checklist

When completing a development task for falcoya-web, follow these steps:

## 1. Code Quality Checks

### Run Linting
```bash
npm run lint
```
- Fix any ESLint errors or warnings
- Ensure code follows project conventions

### Verify Build
```bash
npm run build
```
- Ensure the build completes without errors
- Check for any build warnings
- Verify no TypeScript errors (if any .ts files introduced)

## 2. Testing

### Manual Testing
Since there are no automated unit tests configured:
- Test in development mode: `npm run dev`
- Verify functionality in browser
- Test both Japanese (ja) and English (en) versions if multi-language
- Test on different screen sizes (responsive design)
- Check browser console for errors

### E2E Testing
- E2E tests appear to be run externally (results in `/E2E_Test`)
- Coordinate with the E2E testing process if applicable

## 3. Code Review Checklist

### General
- [ ] Code follows project naming conventions
- [ ] No console.log or debug statements left in code
- [ ] Comments are clear and in appropriate language (Japanese/English)
- [ ] No sensitive data or credentials committed

### React/Next.js Specific
- [ ] Using functional components with hooks
- [ ] Proper use of useState/useEffect dependencies
- [ ] No memory leaks (cleanup in useEffect if needed)
- [ ] Multi-language content properly structured
- [ ] Images optimized and in correct format

### Styling
- [ ] Uses CSS variables from globals.css when appropriate
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No style conflicts with existing pages

### Performance
- [ ] No unnecessary re-renders
- [ ] Images properly sized
- [ ] Bundle size not significantly increased

## 4. Git Workflow

### Before Committing
- [ ] Run `git status` to review changes
- [ ] Stage only relevant files
- [ ] Write clear, descriptive commit message

### Commit Message Format
Use conventional commit format when possible:
```
feat: add new feature description
fix: fix bug description
docs: update documentation
style: formatting changes
refactor: code refactoring
```

## 5. Pre-Deployment

### Verify Configuration
- [ ] Check `next.config.js` for any needed updates
- [ ] Verify environment variables (if any)
- [ ] Ensure security headers are still configured

### Build Test
```bash
npm run build
npm start
```
- Test production build locally before deploying

## 6. Documentation

### Update if Needed
- [ ] Update README.md if feature/setup changes
- [ ] Update blog content if announcing new features
- [ ] Document any new utilities or patterns

## Notes
- The project deploys automatically via Vercel on push to main
- No formal testing framework is configured (consider adding in future)
- Focus on manual testing and code review quality