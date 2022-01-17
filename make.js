import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await (await fetch("https://procon.pcn.club/list")).json();
console.log(data);
const data2 = data.map(d => {
  return {
    id: d.id,
    title: d.sTitle,
    image: "https://procon.pcn.club/thumb-" + d.id,
  }
});
await Deno.writeTextFile("procon2022/procon2022list.csv", CSV.stringify(data2));
