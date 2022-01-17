# pcn_kids_procon

## オープンデータ / opendata

- [CSV](https://pcn-club.github.io/pcn_kids_procon/procon2022/procon2022list.csv)
- [JSON](https://pcn-club.github.io/pcn_kids_procon/procon2022/procon2022list.json)
- [サムネイル](https://github.com/pcn-club/pcn_kids_procon/tree/main/procon2022/thumb)
- [CBOR](https://pcn-club.github.io/pcn_kids_procon/procon2022/procon2022list.cbor) サムネイル画像付き

## サンプルアプリ / sample app

- [PCNこどもプロコン作品一覧](https://pcn-club.github.io/pcn_kids_procon/)

```js
import { CBOR } from "https://js.sabae.cc/CBOR.js";
import { Bin } from "https://js.sabae.cc/Bin.js";
import { shuffle } from "https://js.sabae.cc/shuffle.js";
import { shuffleChildren } from "https://js.sabae.cc/shuffleChildren.js";

onload = async () => {
  const bin = await Bin.fetch("https://pcn-club.github.io/pcn_kids_procon/procon2022/procon2022list.cbor");
  const data = CBOR.decode(bin);
  shuffle(data);
  for (const d of data) {
    const div = document.createElement("div");
    div.style.backgroundImage = "url(" + Bin.toSrc(d.data) + ")";
    const title = document.createElement("div");
    title.textContent = d.id + ". " + d.title;
    div.appendChild(title);
    list.appendChild(div);
  }
  btnshuffle.onclick = () => shuffleChildren(list);
};
```
