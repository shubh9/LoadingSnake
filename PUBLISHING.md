# Publishing to npm

Follow these steps to publish your `loading-snakes` package to npm:

## 1. Create an npm account

If you don't already have an npm account, create one at [npmjs.com](https://www.npmjs.com/signup).

## 2. Login to npm from the command line

Open your terminal and run:

```bash
npm login
```

Enter your username, password, and email when prompted.

## 3. Update package information

Before publishing, make sure to update the following in `package.json`:

- `author`: Add your name and email
- `repository.url`: Update with your actual GitHub repository URL

## 4. Version your package (optional)

If you want to update the version number:

```bash
npm version patch  # For bug fixes
npm version minor  # For new features
npm version major  # For breaking changes
```

## 5. Build the package

Make sure your package is built:

```bash
npm run build
```

## 6. Publish to npm

Run:

```bash
npm publish
```

If this is your first time publishing this package, and you've named it with a scope (e.g., `@yourusername/loading-snakes`), you'll need to specify that it's public:

```bash
npm publish --access=public
```

## 7. Verify your package

After publishing, verify that your package appears on npm by visiting:
https://www.npmjs.com/package/loading-snakes

## 8. Update the package (for future updates)

When you want to update your package:

1. Make your changes
2. Build with `npm run build`
3. Update the version with `npm version patch|minor|major`
4. Publish with `npm publish`
