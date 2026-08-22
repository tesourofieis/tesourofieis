import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Effect from "effect/Effect";

export default Alchemy.Stack(
  "TesouroFieis",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const stage = yield* Alchemy.Stage;
    const prod = stage === "prod";

    // Static Expo web export served by Cloudflare Workers Assets.
    // - unmatched paths fall through to main worker, which serves +not-found.html with a 404
    // - www→apex and trailing-slash 301s live in infra/site-worker.ts
    const site = yield* Cloudflare.Website.StaticSite("Website", {
      command:
        "npm run prebuild && npm run build:web && node scripts/prune-sourcemaps.mjs",
      outdir: "dist",
      main: "./infra/site-worker.ts",
      // Custom domains can't attach while the Pages project still claims
      // these hostnames, so cutover runs on zone routes over the existing
      // (proxied) DNS records. Once Pages is deleted this can switch to a
      // platform-managed `domain` config if desired.
      ...(prod
        ? {
            routes: [
              { pattern: "tesourofieis.com/*" },
              { pattern: "www.tesourofieis.com/*" },
            ],
          }
        : {}),
      assets: {
        htmlHandling: "drop-trailing-slash",
        notFoundHandling: "none",
        runWorkerFirst: true,
      },
    }).pipe(Alchemy.RemovalPolicy.retain(prod));

    return { url: site.url };
  }),
);
