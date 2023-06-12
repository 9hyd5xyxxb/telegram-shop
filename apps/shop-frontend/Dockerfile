FROM docker.io/nginx:stable-alpine
LABEL org.opencontainers.image.source=https://github.com/9hyd5xyxxb/telegram-shop
COPY apps/shop-frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY  dist/apps/shop-frontend/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
