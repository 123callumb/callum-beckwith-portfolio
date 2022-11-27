FROM node:16-alpine as build-stage

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --omit=dev

COPY . /usr/src/app
RUN npm run build-static

FROM nginx:1.23.2-alpine
COPY --from=build-stage /usr/src/app/out/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d