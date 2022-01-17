import { CSV } from "https://js.sabae.cc/CSV.js";

const fn = "procon2022/procon2022list.csv";
const data = CSV.toJSON(await CSV.fetch(fn));
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "json", JSON.stringify(data));
