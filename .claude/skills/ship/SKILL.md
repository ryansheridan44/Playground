---
name: ship
description: Publish the current work to main so it goes live on GitHub Pages. Use when the user says ship it, push to main, publish, or share this.
---

# Ship to main

The live site is `https://ryansheridan44.github.io/Playground/`. A push to `main` runs the "Deploy to GitHub Pages" workflow.

1. `git status`. If there are uncommitted changes, commit them first with a clear message.
2. `npm run build`. If it fails, stop and show the error. Do not push.
3. `git fetch origin main`, then confirm `origin/main` is an ancestor of `HEAD` (`git merge-base --is-ancestor origin/main HEAD`). If not, merge `origin/main` into the branch, rebuild and re-check. Never force push and never rewrite history.
4. Push: `git push origin HEAD:main`. Also push the working branch if it has one.
5. Check the deploy run for that commit finished successfully (GitHub Actions, workflow `deploy.yml`). Report success or the failure with its log.
6. Tell the user the live URL and the short commit.

Only do this when the user has asked to ship or push to main in this conversation.
