#!/bin/bash

docker-compose -f docker-compose.yml build

docker-compose -f docker-compose.yml up -d

winpty docker-compose exec php composer install

docker-compose exec php  composer install


docker-compose exec php php yii migrate/fresh --interactive=0

winpty docker-compose exec php php yii migrate/fresh --interactive=0
