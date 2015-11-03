FROM node:latest

RUN mkdir /src

WORKDIR /src
ADD . /src
RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run prod
