import { CSV } from "https://js.sabae.cc/CSV.js";
import { CBOR } from "https://js.sabae.cc/CBOR.js";

const base = "https://pcn-club.github.io/pcn_kids_procon/procon2022/";

const fn = "procon2022/procon2022list.csv";
const data = CSV.toJSON(await CSV.fetch(fn));
let bcnt = 0;
for (const d of data) {
  const fn = d.thumb.substring(base.length);
  const bin = new Uint8Array(await Deno.readFile("procon2022/" + fn));
  d.data = bin;
  bcnt += bin.length;
}
await Deno.writeFile(fn.substring(0, fn.length - 3) + "cbor", CBOR.encode(data));
console.log(bcnt);
