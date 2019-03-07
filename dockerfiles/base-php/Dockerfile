FROM php:fpm

RUN \
    apt-get update && \
    apt-get -y --no-install-recommends install \
        libicu-dev \
        libpq-dev \
        unzip \
        mc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql

RUN docker-php-ext-install pdo pdo_pgsql



# Composer installation.
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/bin/composer
