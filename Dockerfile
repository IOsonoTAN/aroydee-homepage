FROM node:carbon

ADD . /app

WORKDIR /app

ADD package.json package-lock.json ./

CMD [ "npm", "start" ]
