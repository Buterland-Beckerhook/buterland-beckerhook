#!/usr/bin/env bash

docker run -p 1313:1313 \
	-v $(pwd):/src \
	hugomods/hugo:exts-0.119.0 \
	hugo server --bind 0.0.0.0
