FROM node:20-alpine as builder

WORKDIR /app

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


FROM nginx:alpine
COPY --from=builder /app/build usr/share/nginx/html
COPY config/nginx.template.conf /etc/nginx/conf.d/default.conf

ARG PORT
ENV PORT=$PORT

EXPOSE ${PORT}

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'






