#!/bin/bash
DIR="$(dirname $( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd ))"

docker-compose -f docker-compose.yml stop
