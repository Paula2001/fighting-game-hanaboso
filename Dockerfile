FROM node:14

MAINTAINER Paula Gawargious


WORKDIR /usr/src/app

COPY . ./.

COPY package.json ./

RUN npm install

