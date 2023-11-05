FROM php:7.4.3-alpine

RUN apk add apache2 php-apache2 php-pdo php-pdo_sqlite php-json sqlite

WORKDIR /var/www/localhost/htdocs
RUN rm index.html
COPY . .

RUN cd backend && sh init.sh

CMD ["httpd", "-DFOREGROUND"]
