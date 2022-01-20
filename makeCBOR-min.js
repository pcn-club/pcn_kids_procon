import { CSV } from "https://js.sabae.cc/CSV.js";
import { CBOR } from "https://js.sabae.cc/CBOR.js";

const base = "https://pcn-club.github.io/pcn_kids_procon/procon2022/";

const fn = "procon2022/procon2022list-min.csv";
const data = CSV.toJSON(await CSV.fetch(fn));
let bcnt = 0;
const data2 = [];
for (const d of data) {
  d.thumb = d.thumb.substring(0, d.thumb.lastIndexOf(".")) + ".jpg";
  const fn = d.thumb.substring(base.length);
  const bin = new Uint8Array(await Deno.readFile("procon2022/" + fn));
  const d2 = {};
  Object.assign(d2, d);
  d2.data = bin;
  data2.push(d2);
  bcnt += bin.length;
}
await Deno.writeTextFile(fn, CSV.stringify(data));
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "json", JSON.stringify(data));
await Deno.writeFile(fn.substring(0, fn.length - 3) + "cbor", CBOR.encode(data2));
console.log(bcnt);
