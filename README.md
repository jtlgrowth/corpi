<div align="center">

# Corpi

**Your own team of AI bots, in a chat app.**

<sub>A JTL Growth fork of <a href="https://github.com/milind-soni/OpenMausBot">OpenMausBot</a>. Bring your own agent, local first, on the Claude or Codex login you already have.</sub>

</div>

Every bot in the sidebar is a real agent running on your own machine, with its own personality, its own model, its own computer and its own connected apps. Talk to them like contacts. Watch them work. Approve what matters.

## Install

On a Mac, paste this in Terminal:

```sh
curl -fsSL https://raw.githubusercontent.com/jtlgrowth/corpi/main/install.sh | sh
```

It fetches the right build for your chip, puts Corpi in Applications and opens it. Prefer to do it by hand? Grab the file from [Releases](https://github.com/jtlgrowth/corpi/releases/latest).

| Platform | File | Install |
|---|---|---|
| macOS (Apple silicon) | `Corpi-<version>-arm64.dmg` | Drag to Applications. The build is not notarized yet, so on first open right-click the app, choose Open, then Open again. |
| macOS (Intel) | `Corpi-<version>-x64.dmg` | Same steps. |
| Windows (x64) | `Corpi-<version>-setup.exe` | Run it. SmartScreen shows "unknown publisher": More info, then Run anyway. |

You need one of these installed and signed in: [Claude Code](https://claude.com/claude-code) or [Codex](https://github.com/openai/codex). Corpi runs your bots through that CLI. No new account, no proxy, no key to paste.

## The JTL Starter Team

Corpi ships with a ready team for people learning to run an AI agency: a Chief of Staff plus a Closer, a Content lead, a Lead Scout and a Secretary, each with playbooks and paused routines.

1. Open Corpi, go to **Teams**, then **Import**.
2. Paste this URL:

```
https://raw.githubusercontent.com/jtlgrowth/corpi/main/teams/jtl-starter-team.md
```

3. Review the screen, then create. Connections stay off until you approve them. Routines arrive paused.

The file is plain Markdown. Read it, edit it, make it yours: [teams/jtl-starter-team.md](teams/jtl-starter-team.md).

## What changed from upstream

Corpi is a thin fork. Upstream does the heavy lifting and we rebase on their tags.

- Product name, icon and release channel are Corpi's.
- Usage analytics are removed. No PostHog key ships in this build, so nothing reports anywhere.
- The JTL Starter Team pack is included.

Everything else, including the docs, is upstream's. Start at [docs/](docs/).

## Build from source

Needs Node 24 or newer and pnpm.

```sh
pnpm install
pnpm build
pnpm dev:desktop      # run the app
pnpm package:mac      # DMG + ZIP, needs Xcode command line tools
pnpm package:win      # installer + ZIP
```

## License

Apache-2.0. Corpi is a fork of OpenMausBot, copyright Milind Soni and OpenMausBot contributors. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
