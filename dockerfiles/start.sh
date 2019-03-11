#!/bin/bash

docker-compose -f docker-compose.yml build

docker-compose -f docker-compose.yml up -d


docker-compose exec php  composer install

docker-compose exec php ./yii migrate/fresh --interactive=0
