#/bin/sh

cp manifest.helperExtension.json manifest.json
zip samHelper.zip ./Shared/* ./SamHelper/* ./Images/* ./ChromeExtension.adapter/* ./ChromeExtension.adapter/images/*  ./manifest.json
