#!/bin/sh
# Corpi installer for macOS: fetches the latest release DMG for this Mac's chip,
# copies Corpi.app into /Applications and clears the quarantine flag so the
# unsigned build opens without the Gatekeeper dance.
#   curl -fsSL https://raw.githubusercontent.com/jtlgrowth/corpi/main/install.sh | sh
set -eu
[ "$(uname -s)" = "Darwin" ] || { echo "macOS only. Windows and Linux builds: https://github.com/jtlgrowth/corpi/releases"; exit 1; }
case "$(uname -m)" in arm64) arch=arm64 ;; x86_64) arch=x64 ;; *) echo "unsupported chip: $(uname -m)"; exit 1 ;; esac
url=$(curl -fsSL https://api.github.com/repos/jtlgrowth/corpi/releases/latest | grep browser_download_url | grep "\-${arch}\.dmg" | head -1 | cut -d '"' -f 4)
[ -n "$url" ] || { echo "no ${arch} build in the latest release yet: https://github.com/jtlgrowth/corpi/releases"; exit 1; }
tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT
echo "downloading $(basename "$url")"
curl -fL --progress-bar -o "$tmp/Corpi.dmg" "$url"
mnt=$(hdiutil attach -nobrowse -readonly "$tmp/Corpi.dmg" | awk -F'\t' '/\/Volumes\//{print $NF}' | head -1)
[ -d "$mnt/Corpi.app" ] || { echo "Corpi.app not found in the DMG"; hdiutil detach "$mnt" -quiet || true; exit 1; }
rm -rf /Applications/Corpi.app
cp -Rf "$mnt/Corpi.app" /Applications/
hdiutil detach "$mnt" -quiet
xattr -dr com.apple.quarantine /Applications/Corpi.app 2>/dev/null || true
echo "installed /Applications/Corpi.app"
open -a Corpi
