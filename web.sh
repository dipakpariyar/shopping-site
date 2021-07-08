#! /bin/bash

cp -RT /opt/node_app/node_modules/. /opt/node_app/app/node_modules/

sass --watch ./src/styles/index.scss ./src/styles/index.css &

npm start