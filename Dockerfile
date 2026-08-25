FROM php:8.2-apache
RUN apt-get update \
 && apt-get install -y --no-install-recommends libzip-dev unzip \
 && docker-php-ext-install mysqli zip \
 && rm -rf /var/lib/apt/lists/*
