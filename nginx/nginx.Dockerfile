FROM python:3.9-alpine as nginx-config-builder

WORKDIR /app

COPY ./nginx/generate.py .

ARG SERVER_NAME
ARG SERVER_PORT
ARG SSL

RUN python3 generate.py $SERVER_NAME $SERVER_PORT $SSL >> nginx.conf
RUN cat nginx.conf

FROM nginx:1.21.1-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY --from=nginx-config-builder /app/nginx.conf /etc/nginx/conf.d/default.conf
