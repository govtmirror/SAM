!/bin/sh

cp manifest.helperExtension.json manifest.json
zip samtracker.zip ./Shared/* ./SamHelper/* ./Images/* ./ChromeExtension.adapter/* ./ChromeExtension.adapter/images/*  ./manifest.json
