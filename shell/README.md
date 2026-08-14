# Live Build Session — Full Stack Product Engineering

Welcome! You'll be pairing with us live to build a full-stack solution from
(nearly) scratch. This repo is the starting environment. **Please make sure it
runs on your machine before the session** — we don't want to spend interview
time debugging Docker.

## What to bring

- **Docker** installed and working
- **VS Code** (the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension is optional but handy)
- Use (or add) **any AI tooling you like** — Claude Code, Cursor, Codex,
  Copilot, whatever you're fastest with. We *want* to see how you drive these
  tools.

## Quick start

```sh
make build   # build the container image
make start   # start it
make shell   # get a bash shell inside the container
make stop    # stop it
make help    # list all targets
```

After `make start`, open <http://localhost:3000> — if you see
**Hello World!**, you're ready.

## The environment

- The starter "app" is a plain Node HTTP server (`workspace/server/src/index.js`)
  that serves Hello World! on port 3000. It's the entire codebase.
- The container has **Node.js 22**, git, curl, and standard build tools.
- `./workspace` on your machine is mounted at `/workspace` inside the
  container — edit files on your host with your own editor and AI tools, and
  run them inside the container.
- Ports **3000**, **5173**, and **8000** are published, so dev servers and
  APIs running in the container are reachable from your browser.

## Stack

- **Backend:** Node.js
- **Frontend:** React with Tailwind CSS — keep it simple.

That's the default we provide, but it's not a requirement: **you may switch to
any stack you want ahead of the session** — swap the Dockerfile, the runtime,
the starter server, whatever suits you. Just have it done *before* the live
session (stack setup is not what the hour is for), and make sure
`make build && make start` still serves Hello World! at
<http://localhost:3000>.

## Using VS Code

Two options — pick whichever you prefer:

1. **Edit on host (simplest).** Open this folder in VS Code, edit files in
   `workspace/`, and run them via `make shell`. Your AI tooling runs on your
   host as usual.
2. **Dev Container.** Open this folder in VS Code and choose
   *"Reopen in Container"*. VS Code will build and attach to the container
   with `/workspace` as your workspace folder. (Alternatively, after
   `make start`, use *"Attach to Running Container"* → `studio-dev`.)

## Session format

- You'll get a short situational brief ahead of time (in the instructions PDF
  we sent alongside this repo). It is intentionally high-level — **the details
  live with us**. Treat us as your stakeholders and ask whatever you need to
  know, before and while you build.
- **Narrate out loud** the entire time: what you're thinking, what you're
  asking your AI tools to do, what you're checking, and why.
- **Prompt logging:** at the start of the session, paste
  `prompts/1-start-logging.md` into your AI agent as your first message; at
  the end, paste `prompts/2-stop-logging.md`. This produces a `PROMPTS.md`
  file of everything you asked your agent — send it to us after the session.
- The meeting will be video recorded so we can review it afterward.
- Working software beats ambitious software. The session is one hour —
  scope like it.

> One free hint: this studio needs less software than you think. The hard
> part is finding out which part it actually needs — and that answer isn't in
> this repo. Build less, ask more.
