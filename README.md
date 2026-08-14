# Live Build Session — Full Stack Product Engineering

Starter kit for your live build interview with Songtrust. You'll pair with us
for one hour to build a small full-stack application from (nearly) scratch —
and we expect much of that building to happen through your prompts. Use (or
add) any AI tooling you like: Claude Code, Cursor, Codex, Copilot, whatever
you're fastest with. How you direct these tools — the prompts you write, the
context you give them, the way you check their output — is as much a part of
the craft as the code they produce.

We want to see how you translate a real-world problem into working software
with modern tools, not how well you type syntax from memory. **Narrate out
loud the entire time**: what you're thinking, what you're asking your AI
tools to do, what you're checking, and why. You'll also log every prompt you
send your agent during the session (the files in `shell/prompts/` handle
this) and share the log with us afterward.

## What's here

- **`docs/`** — the candidate instructions. Read them before the session:
  they cover the brief, the hour's format, and a pre-session checklist.
- **`shell/`** — the starter environment: a Docker container that serves
  **Hello World!** at <http://localhost:3000>. See
  [`shell/README.md`](shell/README.md) for setup and details.

## Before the session

1. Read the instructions in `docs/`.
2. From `shell/`, run `make build && make start` and confirm
   <http://localhost:3000> shows **Hello World!**
3. Have your editor and AI tooling of choice set up and ready to prompt.
4. Skim the two files in `shell/prompts/` — you'll paste them into your AI
   agent at the start and end of the session.

Do this ahead of time — interview minutes spent debugging Docker are minutes
you don't get back.
