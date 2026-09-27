import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { copyFile, mkdtemp, mkdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "docs/portfolio/cv-2026-draft.html");
const output = join(root, "output/pdf/Callum_Beckwith_CV_2026_Draft.pdf");
const published = join(root, "public/res/Callum_Beckwith_CV_2026.pdf");
const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const profile = await mkdtemp(join(tmpdir(), "cv-chrome-"));

try {
  await mkdir(dirname(output), { recursive: true });
  await rm(output, { force: true });
  const result = spawnSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--disable-background-networking",
    "--disable-extensions",
    "--no-first-run",
    "--no-pdf-header-footer",
    "--virtual-time-budget=2000",
    `--user-data-dir=${profile}`,
    `--print-to-pdf=${output}`,
    pathToFileURL(source).href,
  ], { encoding: "utf8", timeout: 12000 });
  if (result.error && result.error.code !== "ETIMEDOUT") throw result.error;
  if (result.status !== 0 && result.error?.code !== "ETIMEDOUT") {
    throw new Error(result.stderr || `Chrome exited with ${result.status}`);
  }
  const pdf = await readFile(output);
  if (pdf.length < 10000 || pdf.toString("ascii", 0, 5) !== "%PDF-" ||
      !pdf.toString("ascii", Math.max(0, pdf.length - 256)).includes("%%EOF")) {
    throw new Error("Chrome did not finish writing the PDF");
  }
  await copyFile(output, published);
  console.log(output);
  console.log(published);
} finally {
  await rm(profile, { recursive: true, force: true });
}
