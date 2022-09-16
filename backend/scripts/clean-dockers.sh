#!/bin/bash
docker stop backend-crawler-1
docker stop backend-postgres-1
docker stop backend-graphql-engine-1

docker rm backend-crawler-1
docker rm backend-postgres-1
docker rm backend-graphql-engine-1

docker rmi crawler:latest

docker volume rm backend_db-data

