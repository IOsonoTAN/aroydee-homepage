FROM node:carbon

ADD . /app

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

RUN npm install --global bower

RUN bower install --allow-root

CMD [ "npm", "start" ]
