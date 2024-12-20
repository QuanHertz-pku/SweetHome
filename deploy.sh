#!/bin/bash

# 执行部署操作
docker-compose stop frontend backend
docker-compose rm -f frontend backend
docker-compose build --no-cache frontend backend #天杀！如果不重建镜像Push一万遍都没效果qwq
docker image prune -f #清理一下无效的镜像
docker-compose up -d frontend backend

#配置Nginx
docker cp default.conf frontend_container:/etc/nginx/conf.d/default.conf
docker exec frontend_container nginx -s reload