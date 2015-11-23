FROM node:latest
MAINTAINER alexandr.gudulin@gmail.com

COPY ./package.json src/
RUN cd src && npm install

COPY . /src
WORKDIR src/
RUN npm run build

CMD npm run prod
