import { CSV } from "https://js.sabae.cc/CSV.js";

const base = "https://pcn-club.github.io/pcn_kids_procon/procon2022/";

const fn = "procon2022/procon2022list.csv";
const data = CSV.toJSON(await CSV.fetch(fn));
for (const d of data) {
  const fnpng = "thumb/" + d.id + ".png";
  const fnjpg = "thumb/" + d.id + ".jpg";
  if (await Deno.fstat(fnpng)) {
    d.thumb = base + fnpng;
  } else {
    d.thumb = base + fnjpg;
  }
}
await Deno.writeTextFile(fn, CSV.stringify(data));
