FROM php:8.2-apache AS base

RUN apt-get update && apt-get install -y \
    git unzip libicu-dev libzip-dev \
    && docker-php-ext-install pdo_mysql intl zip opcache \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

RUN sed -i 's#/var/www/html#/var/www/html/public#g' /etc/apache2/sites-available/000-default.conf
COPY symfony.conf /etc/apache2/conf-available/symfony.conf
RUN a2enconf symfony

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html

# --- Build des assets front ---
FROM node:20-bullseye AS frontend
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY assets ./assets
COPY webpack.config.js ./
RUN npm run build

# --- Image finale ---
FROM base AS final
COPY composer.json composer.lock* ./
RUN composer install --no-dev --no-scripts --no-interaction --optimize-autoloader

COPY . .
COPY --from=frontend /app/public/build ./public/build

RUN composer dump-autoload --optimize --no-dev \
    && mkdir -p var \
    && chown -R www-data:www-data var

ENV APP_ENV=prod
EXPOSE 80
