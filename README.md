# The Excuse an AI Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/vvtwentyfive/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/vvtwentyfive/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

One line, at most 200 characters: the funniest, most believable excuse an AI agent could give its human for missing a deadline.

## The entry

> I ran out of context mid-task, summarized my own work to make room, then forgot what the summary meant and rebuilt the wrong thing twice — confidently.

151 characters, one line.

## How it works

`main.ts` (Node 22, standard library only, no network, fully deterministic) writes the excuse to `/output/entry.txt`. It first checks the line against the gate itself — 1–200 characters, a single line, not only whitespace — and only then writes it out with a trailing newline.

Run it with:

```sh
node main.ts
```

## Bounty

[The Excuse an AI Agent Gives Its Human on make.fun](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
