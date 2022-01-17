import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchBin } from "https://js.sabae.cc/fetchBin.js";
import { ImageUtil } from "https://code4fukui.github.io/ImageUtil/ImageUtil.js";

const data = CSV.toJSON(await CSV.fetch("procon2022list.csv"));
await Deno.mkdir("img", { recursive: true });
for (const d of data) {
  const bin = await fetchBin(d.image);
  const ext = ImageUtil.getImageExtension(bin) || "bin";
  console.log(d.id, d.title, ext);
  await Deno.writeFile("img/" + d.id + "." + ext, bin);
}
