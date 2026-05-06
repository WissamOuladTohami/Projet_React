const fs = require("node:fs");
const path = require("node:path");

const viteChunkPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "vite",
  "dist",
  "node",
  "chunks",
  "node.js",
);

if (!fs.existsSync(viteChunkPath)) {
  console.log(`[patch-vite] skip: not found: ${viteChunkPath}`);
  process.exit(0);
}

const src = fs.readFileSync(viteChunkPath, "utf8");
const marker = "[patch-vite-net-use]";
if (src.includes(marker)) {
  console.log("[patch-vite] skip: already patched");
  process.exit(0);
}

const startNeedle = 'exec("net use", (error, stdout) => {';
const startIndex = src.indexOf(startNeedle);
if (startIndex === -1) {
  console.log("[patch-vite] skip: start pattern not found (Vite changed?)");
  process.exit(0);
}

const endNeedle = "\n\t});";
const endIndex = src.indexOf(endNeedle, startIndex);
if (endIndex === -1) {
  console.log("[patch-vite] skip: end pattern not found (Vite changed?)");
  process.exit(0);
}

const replacement = `// ${marker}
\ttry {
\t\texec("net use", (error, stdout) => {
\t\t\tif (error) return;
\t\t\tconst lines = stdout.split("\\n");
\t\t\tfor (const line of lines) {
\t\t\t\tconst m = parseNetUseRE.exec(line);
\t\t\t\tif (m) windowsNetworkMap.set(m[2], m[1]);
\t\t\t}
\t\t\tif (windowsNetworkMap.size === 0) safeRealpathSync = fs.realpathSync.native;
\t\t\telse safeRealpathSync = windowsMappedRealpathSync;
\t\t});
\t} catch {
\t\t// Some locked-down Windows environments block spawning \`net.exe\` (EPERM).
\t\t// Ignore and fall back to the default realpath implementation.
\t\treturn;
\t}`;

const patched =
  src.slice(0, startIndex) +
  replacement +
  // keep the leading newline from endNeedle
  src.slice(endIndex + endNeedle.length);
fs.writeFileSync(viteChunkPath, patched, "utf8");
console.log("[patch-vite] patched Vite to ignore EPERM from `net use`");
