# Web hosting (Cloudflare via Alchemy)

The Expo web export (`expo export --platform web` → `dist/`) deploys as
Cloudflare Worker static assets through `alchemy.run.ts`. Mobile apps are
unaffected (EAS / expo-updates).

## Stack shape

- `Cloudflare.Website.StaticSite("Website")` — runs `prebuild` + `build:web`,
  uploads `dist/`, serves assets free at the edge.
- Trailing-slash 301s come from `htmlHandling: "drop-trailing-slash"`
  (replaces `functions/_middleware.js`).
- Unmatched paths fall through to `infra/site-worker.ts`, which serves
  `+not-found.html` with a 404 status.
- `prod` stage pins `tesourofieis.com` and 301s `www` → apex.

## Commands

```bash
bun run cf:dev            # local dev against real resources
bun run cf:deploy         # default (dev) stage → *.workers.dev URL
bun run cf:deploy:prod    # prod stage → tesourofieis.com
bun run cf:destroy        # tear a stage down
```

First-time auth (interactive): `bunx alchemy login`, then
`bunx alchemy cloudflare bootstrap` (one-time account-level state-store worker).

## Cutover from Cloudflare Pages (done 2026-08-22)

- The Worker took over via zone **routes** over the existing proxied DNS
  records (`tesourofieis.com/*`, `www.tesourofieis.com/*`) — no DNS edits,
  zero downtime. www→apex and trailing-slash 301s are handled in
  `infra/site-worker.ts`.
- Remaining cleanup: delete the Pages project **tesouro** in the dashboard
  once confident (it serves zero traffic now). After that, the routes could
  optionally become a platform-managed `domain` config.

Prod site resource uses `RemovalPolicy.retain` — destroying the stack will
not delete the production deployment silently.
