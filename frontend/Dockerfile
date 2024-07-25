FROM node:20-alpine as builder
WORKDIR /app
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build


FROM nginx:alpine
COPY --from=builder /app/build usr/share/nginx/html
COPY config/nginx.template.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]






