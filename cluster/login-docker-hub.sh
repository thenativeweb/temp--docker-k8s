#!/usr/bin/env bash

set -e

kubectl create \
  --namespace <...> \
  secret \
  docker-registry \
  docker-hub \
  --docker-username=... \
  --docker-password=... \
  --docker-email=...
