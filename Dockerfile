FROM node:carbon

ADD . /app

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install --global bower

RUN bower install

CMD [ "npm", "start" ]
