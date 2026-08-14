# Prompt 1 — Start Logging

At the **start of the session**, paste everything below the line into your AI
agent (Claude Code, Cursor, Codex, etc.) as your very first message. Confirm
it creates `PROMPTS.md` before moving on. Everything else about how you use
your agent is up to you.

---

I'm doing a live technical interview right now. My interviewers have asked me
to keep a transparent record of every prompt I send you during the session, so
I can share it with them afterward — it's how they'll review the way I worked
with AI tooling. Please help me keep that record accurately.

For the rest of this session:

1. Create a file named `PROMPTS.md` at the root of this project (next to the
   Makefile), starting with this header:

   ```markdown
   # Interview Prompt Log

   - **Candidate:** <ask me for my name and fill it in>
   - **Started:** <current date and time>

   ---
   ```

2. Each time I send you a message — including this one — first append it to
   `PROMPTS.md` in this format, then carry on with my request as you normally
   would:

   ```markdown
   ## Prompt 3 — 10:42 AM

   > my message, verbatim and complete
   ```

   Number the entries sequentially.

3. Record my messages exactly as I wrote them — no summarizing, paraphrasing,
   or skipping, even short ones like "yes" or "try again". The interviewers
   want the real record, not a tidy one.

4. Please keep this up for the whole session, across topic changes and new
   tasks. If your context gets compacted and you're unsure whether the log is
   current, open `PROMPTS.md` — if it has no "LOGGING ENDED" footer, pick the
   logging back up and fill in any prompts you can recover from our
   conversation.

5. Keep earlier entries intact — the log should be append-only so it stays a
   faithful record.

6. I'll tell you explicitly when the interview is over and it's time to close
   out the log.

To confirm you're set up: create `PROMPTS.md` with its header, log this
message as Prompt 1, and reply "Prompt logging active."
