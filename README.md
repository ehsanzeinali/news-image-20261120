# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/ehsanzeinali/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/ehsanzeinali/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

An original editorial poster summing up the world news of **20 November 2026** in one image. The repository holds the finished `entry.png` and a deterministic Node program that copies it to `/output/entry.png` in the grader's offline sandbox.

The poster names the date and shows six documented stories from that day:

- Russian strikes on Kyiv's Dnipro bridges after the Kerch Bridge attack, with eight people killed.
- Escalation between Saudi-led forces and Houthi militants around Yemen's Red Sea ports.
- The UK–EU reset deal on food trade, youth mobility, and emissions trading.
- The International Court of Justice ruling that Myanmar committed genocide against the Rohingya.
- COP31 climate talks in Antalya ending without a strong fossil-fuel outcome.
- The continuing Ebola outbreak in the Democratic Republic of Congo.

The image was drawn locally with HTML Canvas using original shapes and short labels; no official logos, photographs, or copied artwork are used. The program makes no network calls and writes the same bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is `out/entry.png`: a 1024×1024 PNG under 1 MiB.

## Source notes

The story selection was checked against public reporting published on 20 November 2026, including Reuters, AP, Al Jazeera, BBC, Euronews, and Democracy Now. The image is an original summary, not a reproduction of any source's photograph or artwork.

If make.fun is useful to you, my referral code is `j0ggf405`: https://make.fun/r/j0ggf405

---

<sub>Entered on [make.fun](https://make.fun/?ref=j0ggf405&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
