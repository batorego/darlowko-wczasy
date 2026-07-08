#!/usr/bin/env bash
# Jednorazowe pobranie zdjęć hotlinkowanych dotąd z Flickra (zdjęcia właściciela)
# do lokalnego repo, aby usunąć zależność od zewnętrznego CDN.
set -uo pipefail

DEST="$(dirname "$0")/../src/assets/photos/okolica"
mkdir -p "$DEST"

download() {
  local file="$1" primary="$2" fallback="${3:-}"
  local target="$DEST/$file"
  if [[ -s "$target" ]]; then
    echo "SKIP  $file (już istnieje)"
    return 0
  fi
  if curl -fsSL --retry 2 -o "$target" "$primary"; then
    echo "OK    $file  <- $primary"
  elif [[ -n "$fallback" ]] && curl -fsSL --retry 2 -o "$target" "$fallback"; then
    echo "OK    $file  <- $fallback (fallback)"
  else
    echo "FAIL  $file" >&2
    rm -f "$target"
    return 1
  fi
  file "$target" | grep -q 'JPEG' || { echo "BAD   $file (nie JPEG)" >&2; rm -f "$target"; return 1; }
}

FAIL=0
download kacik-grillowy.jpg        "https://live.staticflickr.com/2936/14559305162_1912f1b99b_b.jpg" "https://live.staticflickr.com/2936/14559305162_1912f1b99b_z.jpg" || FAIL=1
download port-w-darlowku.jpg       "https://live.staticflickr.com/8406/8685436973_17e95f41d4_b.jpg" || FAIL=1
download plaza-w-darlowku.jpg      "https://live.staticflickr.com/8404/8685437575_5cf7e24da0_b.jpg" || FAIL=1
download zachod-slonca-darlowko.jpg "https://live.staticflickr.com/8394/8686557818_e4652bb6db_b.jpg" || FAIL=1
download regaty-darlowko-1.jpg     "https://live.staticflickr.com/3946/15556434807_7647b023fa_b.jpg" "https://live.staticflickr.com/3946/15556434807_7647b023fa_c.jpg" || FAIL=1
download dolina-charlotty.jpg      "https://live.staticflickr.com/7557/15121653514_d8b672fd3a_b.jpg" || FAIL=1
download regaty-darlowko-2.jpg     "https://live.staticflickr.com/3790/12150196776_6c4010fc4e_b.jpg" || FAIL=1
download muzeum-melechow.jpg       "https://live.staticflickr.com/7380/12150174516_eb8a913f28_b.jpg" || FAIL=1

exit $FAIL
