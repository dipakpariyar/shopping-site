#!/bin/bash

cp -RT /opt/node_app/node_modules/. /opt/node_app/app/node_modules/

sass --watch ./client/src/styles/index.scss ./build/public/assets/css/index.css &
npm run dev