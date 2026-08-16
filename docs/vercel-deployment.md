# Vercel deployment

The SOAR site is a Vite + React static frontend. It can be deployed to Vercel using the repository root with the following settings:

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `pnpm run build:vercel` |
| Output directory | `dist/public` |
| Install command | `pnpm install` or Vercel’s automatic pnpm detection |
| Root directory | Repository root |

The repository includes `vercel.json`, which supplies the build command, output directory, and SPA fallback rewrite. The SPA rewrite keeps the landing page available when Vercel receives a direct request for a client-side route.

The Vercel build uses `vite build` only. It does not start the Manus scaffold’s Express server because this project has no backend requirements. The site’s visual assets are bundled as local WebP files under `client/public/assets`, so the deployed page does not depend on the Manus `/manus-storage` proxy.

The contact form and resource preview actions are currently front-end states. Connect them to a form service or backend before treating them as production data flows.
