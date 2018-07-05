FROM node:alpine
COPY . /web
WORKDIR /web
RUN npm i
RUN npm i -g pm2
EXPOSE 5000
RUN pm2 start bin/www

