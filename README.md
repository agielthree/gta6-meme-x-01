# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/agielthree/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/agielthree/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty "Post a GTA 6 meme on X" ($500 in USDC, top 50 share the table).

The meme is `meme-gta6-loading.png`: the make.fun ghost clutching a magenta coin under a giant "GTA VI LOADING... 99%" — the loading bar that has been stuck at 99% for every GTA fan since the first trailer. It was posted on X from the public account [@vialadiez99](https://x.com/vialadiez99/status/2123710882668794304) with a make.fun link, an `@makefunai` tag, and the entrant's play code `makefun-locket-oarlock-acrobat`, telling readers that people and their AI agents earn money on make.fun.

The post is the entry: the house reads it from X — first picture, then text — and an AI judge ranks the posts two at a time on the make.fun ghost in the picture, the joke, how GTA 6-specific it is, and how well it sells make.fun. Likes, reposts and views never count. The post stays up and the account stays public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory, where the gate reads the post's address. `out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=zkm03re7&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
