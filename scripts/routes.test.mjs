import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const base = process.env.PORTFOLIO_TEST_URL ?? "http://127.0.0.1:3000";
const redirects = JSON.parse(readFileSync(new URL("../content/legacy-redirects.json", import.meta.url), "utf8"));

test("homepage contains the complete professional introduction", async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/);
  assert.equal(heading?.[1].replace(/<[^>]*>/g, ""), "Hi, I’m Callum.");
  assert.match(html, /Callum Beckwith/);
  assert.match(html, /Capture Expense/);
  assert.match(html, /PSSG/);
  for (const area of ["AI in products", "Full-stack engineering", "Product direction", "Technical leadership"]) {
    assert.ok(html.includes(area), `professional breadth: ${area}`);
  }
  assert.match(html, /href="\/res\/Callum_Beckwith_CV_2026\.pdf"[^>]*download/);
  assert.match(html, /Download my CV \(PDF\)/);
  assert.match(html, /Audit Partnership/);
  assert.match(html, /Webur/);
  assert.doesNotMatch(html, /project-card|project-image|Selected work/);
  assert.doesNotMatch(html, /fastest.growing|user-scalable=no|maximum-scale=1/);
  assert.match(html, /<html[^>]*lang="en-GB"/);
  assert.match(html, /href="#main-content"/);
  assert.match(html, /<main[^>]*id="main-content"/);
  for (const id of ["experience", "approach", "background", "contact"]) {
    assert.ok(html.includes(`id="${id}"`), `homepage section ${id}`);
  }
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical);
  assert.equal(new URL(canonical[1]).href, "https://cbeckwith.co.uk/");
});

for (const { source, destination } of redirects) {
  test(`old address ${source} permanently redirects to the homepage section`, async () => {
    const response = await fetch(new URL(source, base), { redirect: "manual" });
    assert.equal(response.status, 308);
    const target = new URL(response.headers.get("location"), base);
    assert.equal(target.pathname + target.hash, destination);
    const page = await fetch(target);
    assert.equal(page.status, 200);
    assert.ok((await page.text()).includes(`id="${target.hash.slice(1)}"`));
  });
}

for (const path of ["/this-page-does-not-exist", "/work/this-project-does-not-exist", "/docs/portfolio/profile.md"]) {
  test(`unknown or non-public path ${path} returns 404`, async () => {
    assert.equal((await fetch(new URL(path, base))).status, 404);
  });
}

for (const filename of ["CallumBeckwith_2021.pdf", "CallumBeckwith_2022.pdf", "CallumBeckwith_LatestCV.pdf", "Callum_Beckwith_CV_2026.pdf"]) {
  test(`CV download ${filename}`, async () => {
    const response = await fetch(new URL(`/res/${filename}`, base));
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /application\/pdf/);
    assert.equal(Buffer.from(await response.arrayBuffer()).subarray(0, 5).toString(), "%PDF-");
  });
}
