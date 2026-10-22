#!/bin/bash
# Run the latest version of the playground locally.
# Picks the most recently pushed branch (a claude/* branch or main), pulls it, installs
# anything that changed, frees port 5173 and opens the prototype in your browser.
# Usage: scripts/preview.sh [branch]
set -e
cd "$(dirname "$0")/.."

git fetch --quiet origin
BRANCH="${1:-$(git for-each-ref --sort=-committerdate refs/remotes/origin --format='%(refname:short)' | grep -v '^origin/HEAD$' | head -1 | sed 's#^origin/##')}"

# npm rewrites the lockfile on install; that is generated, so put it back rather than stopping
git checkout -- package-lock.json 2>/dev/null || true

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "You have local edits in this folder, so I will not switch branches."
  echo "These files are changed:"
  git status --short --untracked-files=no
  echo
  echo "If you did not edit them on purpose, run:  git checkout -- <file>"
  echo "Otherwise commit them first, then run this again."
  exit 1
fi

echo "Branch: $BRANCH"
git checkout --quiet "$BRANCH" 2>/dev/null || git checkout --quiet -b "$BRANCH" "origin/$BRANCH"
git pull --quiet --ff-only origin "$BRANCH"
echo "Commit: $(git log --oneline -1)"

if [ ! -d node_modules ] || [ package-lock.json -nt node_modules ]; then
  npm install --no-audit --no-fund
  touch node_modules
fi

# an old dev server on the same port is the usual reason you see an out of date page
OLD="$(lsof -ti tcp:5173 2>/dev/null || true)"
if [ -n "$OLD" ]; then
  echo "Stopping the dev server already on port 5173"
  kill $OLD 2>/dev/null || true
  sleep 1
fi

OPEN=""
command -v open >/dev/null 2>&1 && OPEN="--open /Playground/#/prototypes/sub-brand-navigation"
exec npm run dev -- --port 5173 --strictPort $OPEN
