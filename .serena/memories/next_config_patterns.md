# Next.js Configuration Patterns

## Current Configuration (`next.config.js`)

### Key Settings

#### React Strict Mode
```javascript
reactStrictMode: true
```
- Enables strict mode for better development warnings
- Helps identify potential problems in the application

#### SWC Minification
```javascript
swcMinify: true
```
- Uses SWC-based minification (faster than Terser)
- Optimizes bundle size

#### Image Configuration
```javascript
images: {
  domains: [],
  unoptimized: true
}
```
- No external image domains configured
- Images are unoptimized (likely for static export compatibility)

#### URL Configuration
```javascript
trailingSlash: false
```
- URLs do not end with trailing slashes
- `/blog` not `/blog/`

### Security Headers

The configuration includes important security headers:

```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ]
}
```

**Security Headers Explained:**
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information

### Redirects
```javascript
async redirects() {
  return []
}
```
- No redirects currently configured
- Template in place for future redirects

## Patterns and Best Practices

### When to Modify next.config.js

1. **Adding External Image Domains**
   - If using Next.js Image component with external sources
   - Add domains to `images.domains` array

2. **Adding Redirects**
   - For URL migration or page moves
   - Add to the `redirects()` function

3. **Environment Variables**
   - Public variables: prefix with `NEXT_PUBLIC_`
   - Access via `process.env.NEXT_PUBLIC_*`

4. **Adding Custom Headers**
   - Security headers already configured
   - Add to `headers()` array if needed

5. **Build Configuration**
   - Output: 'export' for static export
   - Custom webpack config if needed

## Deployment Configuration (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

- Vercel automatically detects Next.js
- Standard build commands configured
- No custom build settings needed