FROM nginx:alpine

USER root

COPY default.template /etc/nginx/default.template
COPY default_ssl.template /etc/nginx/default_ssl.template
COPY deploy.sh /deploy.sh

RUN chmod +x /deploy.sh

ENTRYPOINT [ "/deploy.sh"]

CMD ["nginx", "-g", "daemon off;"]