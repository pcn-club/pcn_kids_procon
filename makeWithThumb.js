import { CSV } from "https://js.sabae.cc/CSV.js";
import { CBOR } from "https://js.sabae.cc/CBOR.js";

const base = "https://pcn-club.github.io/pcn_kids_procon/";

const fn = "procon2022/procon2022list.csv";
const data = CSV.toJSON(await CSV.fetch(fn));
for (const d of data) {
  const fnpng = "procon2022/thumb/" + d.id + ".png";
  const fnjpg = "procon2022/thumb/" + d.id + ".jpg";
  try {
    const stat = await Deno.stat(fnpng);
    d.thumb = base + fnpng;
  } catch (e) {
    d.thumb = base + fnjpg;
  }
}
await Deno.writeTextFile(fn, CSV.stringify(data));
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "json", JSON.stringify(data));
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "cbor", CBOR.encode(data));
