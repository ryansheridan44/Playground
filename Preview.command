#!/bin/bash
# Double-click in Finder to run the latest playground locally.
cd "$(dirname "$0")"
bash scripts/preview.sh
echo
read -n 1 -s -r -p "Stopped. Press any key to close."
