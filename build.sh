#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TMP_DIR=".tmp"
OUT_DIR="dist"

if [ -d "$TMP_DIR" ]; then rm -Rf $TMP_DIR; fi
cp -R $DIR/src $DIR/$TMP_DIR

# CJQuery Libs
npm run build:jquery-libs
npm run build:jquery-libs-amd

# Style Libs
npm run build:style-lib

# Build
npm run build:latencymon

if [ -d "$OUT_DIR" ]; then rm -Rf $OUT_DIR; fi
cp -R $DIR/$TMP_DIR $DIR/dist