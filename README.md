# Using local Kafka 

## Why

From various purpose we might need run a Kafka locally, we want to, i.e.:
- test our consumer/producer application
- debug our kafka system / application
- try some new settings directly on kafka

## How

We basicly have 3 different way to achieve this, from the least complex to the most complex:
1. [docker-compose solution](./docs/docker-compose-kafka.md)
1. [manually on k8s with port-forwarding](./docs/k8s-port-forward.md)
1. strimzi operator on k8s 
1. manually on k8s with headless service and LoadBalancer

## Prerequisits
- node
- docker
