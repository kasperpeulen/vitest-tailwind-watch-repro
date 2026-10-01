# Vitest watch mode reruns every test when a file scanned by Tailwind changes

```sh
npm install
npx playwright install chromium
npm test
```

Wait for the first run to finish, then save `src/button.ts` with any change, for example a new empty line.

- Expected: only `src/button.test.ts` reruns (`Test Files  1 passed (1)`), it is the only test that imports `src/button.ts`.
- Actual: both test files rerun (`Test Files  2 passed (2)`).

`setup.ts` imports `src/globals.css`. Tailwind scans `src/button.ts` for class names and registers it as a dependency of that stylesheet, and the watcher follows that dependency from `src/button.ts` to the stylesheet and on to the setup file.

This uses browser mode because that is where stylesheets are always processed. Node mode with `css: true` shows the same thing.
