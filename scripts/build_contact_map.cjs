// Precompute the Magic UI dotted-map geometry once, keeping Contact free of
// geographic sampling and thousands of React DOM nodes on first navigation.
// Adapted from https://magicui.design/docs/components/dotted-map (MIT).
const { createMap } = require("svg-dotted-map");
const fs = require("node:fs");
const path = require("node:path");

const { points, addMarkers } = createMap({ width: 150, height: 75, mapSamples: 5000 });
const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x);
const rows = new Map();
let step = 0;
let previousY = NaN;
let previousX = NaN;
for (const point of sorted) {
  if (point.y !== previousY) {
    previousY = point.y;
    previousX = NaN;
    rows.set(point.y, rows.size);
  }
  if (!Number.isNaN(previousX)) {
    const delta = point.x - previousX;
    if (delta > 0) step = step === 0 ? delta : Math.min(step, delta);
  }
  previousX = point.x;
}
const round = (value) => Number(value.toFixed(3));
const dots = points.map((point) => {
  const x = point.x + ((rows.get(point.y) || 0) % 2 ? (step || 1) / 2 : 0);
  return '<circle cx="' + round(x) + '" cy="' + round(point.y) + '" r=".22"/>';
}).join("");
const marker = addMarkers([{ lat: 20.59, lng: 78.96, size: 1.25 }])[0];
const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 75">'
  + '<title>Based in India. Open to working across borders.</title>'
  + '<g fill="#80634f">' + dots + '</g>'
  + '<g transform="translate(' + round(marker.x) + ',' + round(marker.y) + ')">'
  + '<circle r="3.7" fill="#ec9162" opacity=".12"/>'
  + '<circle r="2.5" fill="none" stroke="#ec9162" stroke-width=".3" opacity=".6"/>'
  + '<circle r="1.05" fill="#ffd6bd" stroke="#ec9162" stroke-width=".5"/>'
  + '<path d="M3 -2L10 -8H24" fill="none" stroke="#ec9162" stroke-width=".3"/>'
  + '<text x="11" y="-10" fill="#ffd6bd" font-size="3" letter-spacing=".5" font-family="Arial,sans-serif">INDIA</text>'
  + '</g></svg>';
const output = path.join(__dirname, "../public/Assets/contact-world-map.svg");
fs.writeFileSync(output, svg + "\n");
console.log("Generated cached Magic UI map:", points.length, "dots,", Buffer.byteLength(svg), "bytes");
