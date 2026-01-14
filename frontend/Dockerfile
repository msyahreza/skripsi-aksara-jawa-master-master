FROM node:12.18.0-buster-slim as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --silent
RUN npm install react-scripts@4.0.3 -g --silent

COPY . .
RUN npm run build


FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]