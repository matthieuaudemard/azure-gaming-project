FROM node:14 as build
WORKDIR /app
RUN npm install -g @angular/cli
COPY ./package.json .
RUN npm install
COPY . .
RUN ng build --prod
FROM nginx as runtime
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
