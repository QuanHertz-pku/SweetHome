#!/bin/bash

# 克隆代码仓库
cd SweetHome
git pull
# 执行部署操作
docker-compose stop frontend backend
docker-compose rm -f frontend backend
docker-compose up -d frontend backend

#配置Nginx
docker cp default.conf frontend_container:/etc/nginx/conf.d/default.conf
docker exec frontend_container nginx -s reload