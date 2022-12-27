#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TMP_DIR=`.tmp`

if [ -d "$TMP_DIR" ]; then rm -Rf $TMP_DIR; fi
cp -R src TMP_DIR

# CJQuery Libs
npm run build:jquery-libs
npm run build:jquery-libs-amd

# Style Libs
npm run build:style-lib

# Build
npm run build:latencymon

cp -R TMP_DIR dist

exit 0;