FROM node:14

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8 \
    NODE_PATH=/opt/node_app/node_modules \
    PATH=$PATH:/opt/node_app/node_modules/.bin

RUN echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf \
    && mkdir /opt/node_app

WORKDIR /opt/node_app
COPY package.json /opt/node_app/
COPY start.sh /opt/node_app/
RUN npm install --silent && \
    npm install --silent -g nodemon && \
    npm install --silent -g sass 
    
WORKDIR /opt/node_app/app
COPY . .
RUN npm install
# CMD yarn dev:ssl
# It's a workaround because we have raw path to node_modules in our application
RUN chmod 777 start.sh
CMD ./start.sh