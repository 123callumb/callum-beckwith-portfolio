import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build"], {
  stdio: "inherit",
  env: { ...process.env, PORTFOLIO_STATIC_EXPORT: "1" },
});
if (result.error) console.error(result.error);
if (result.status === 0) {
  const routes = JSON.parse(readFileSync(new URL("../content/legacy-redirects.json", import.meta.url), "utf8"));
  for (const { source, destination } of routes) {
    const file = join("out", `${source.slice(1)}.html`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="0;url=${destination}"><meta name="robots" content="noindex"><link rel="canonical" href="https://cbeckwith.co.uk/"><title>Callum Beckwith — page moved</title></head><body><main><h1>Everything is now on one page.</h1><p><a href="${destination}">Continue to Callum Beckwith’s portfolio</a></p></main></body></html>`);
  }
}
process.exit(result.status ?? 1);
