FROM node:8-alpine
COPY . /web
WORKDIR /web
RUN npm i
RUN npm i -g pm2
EXPOSE 5000
CMD pm2 start bin/www --no-daemon

