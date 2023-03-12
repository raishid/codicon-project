#!/bin/sh

# Trigger an error if non-zero exit code is encountered
set -e 

export APP_SSL
export BACKEND_HOST
export FRONTEND_HOST

echo "Deploying Nginx for $DOMAIN"
echo "Ssl active: $APP_SSL"

if [ $APP_SSL == 'true' ]; then
    envsubst '${BACKEND_HOST} ${FRONTEND_HOST}' < /etc/nginx/default_ssl.template > /etc/nginx/conf.d/default.conf
else
    envsubst '${BACKEND_HOST} ${FRONTEND_HOST}' < /etc/nginx/default.template > /etc/nginx/conf.d/default.conf
fi

exec "$@"