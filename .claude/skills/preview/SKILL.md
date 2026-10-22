---
name: preview
description: Run the latest version of the playground locally and open it in the browser. Use when the user asks to preview, run it locally, see the latest changes, or says the page looks out of date.
---

# Preview the latest version locally

Run `bash scripts/preview.sh` from the repo root (use `run_in_background` so the dev server keeps going).

The script fetches, switches to the most recently pushed branch (a `claude/*` branch or `main`), fast-forward pulls, installs dependencies only when `package-lock.json` changed, frees port 5173 and starts Vite, opening `http://localhost:5173/Playground/#/prototypes/sub-brand-navigation`.

After it starts:
- Tell the user the branch and commit it printed, and the URL.
- The prototype's Controls panel shows `Build <sha>`. If it does not match the commit, they are looking at an old tab or an old server.
- If it stops because of local edits, do not discard them. Show `git status` and ask what to do.
- To preview a specific branch, pass it as an argument: `bash scripts/preview.sh <branch>`.
