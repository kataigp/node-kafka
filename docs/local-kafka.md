# Using local Kafka 

## Why

From various purpose we might need run a Kafka locally, i.e.:
- we want to test our consumer/producer application
- we want to debug our kafka system / application
- we want to try some new settings directly on kafka

## How

We basicly have 3 different way to achieve this, from simpliest to hardest:
1. docker-compose solution
1. strimzi operator on k8s
1. manually on k8s

## Prerequisits
- node
- docker

## 1. docker-compose

### Steps:
Tutorial: https://www.youtube.com/watch?v=EiDLKECLcZw&ab_channel=KrisFoster
Git repository: https://github.com/kriscfoster/node-kafka-producer-consumer

1. Download this [docker-compose.yaml]() file
1. Build and run our containers with `docker-compose up`
1. create a topic `docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh --list --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic my-test-topic`

        kafka-topics --zookeeper flag is deprecated cli thorw an error, use --bootstrap-server instead of that.
1. After these we can create a local producer/consumer pair to test our local docker kafka.

## 2. strimzi operator

https://medium.com/streamingdata/running-kafka-locally-inside-kubernetes-25e84586bbf3

https://dev.to/azure/kafka-connect-on-kubernetes-the-easy-way-2co9

## 2. manual k8s


# useful commands
kafka

kafka-topics --create --bootstrap-server kafka:29092 --replication-factor 1 --partitions 1 --topic gergo-test-topic
kafka-topics --list --bootstrap-server kafka:29092

kafka-console-consumer --bootstrap-server kafka:29092 --topic gergo-test-topic --from-beginning

kafka-console-producer --topic gergo-test-topic --bootstrap-server kafka:29092 --property parse.key=true --property key.separator=":"
kafka-console-consumer --topic gergo-test-topic --bootstrap-server kafka:29092 --from-beginning --property print.key=true --property key.separator=":"

kubernetes

kubectl get pods,deployments,services -n kafka

kubectl delete pods,deployments,services --all -n kafka


# about kafka
https://rmoff.net/2018/08/02/kafka-listeners-explained/

# related technologies
- [kompose](https://kompose.io/) to conert docker-compose,yml to k8s CRD
- [Helm](https://helm.sh/) package manager if want to use charts
- [kafka-ui](https://github.com/provectus/kafka-ui)

# Writing producer/consumer with node.js

## kafkajs
## node-rdkafka

    on windows machine if `npm i node-rdkafka` fails and [this](https://github.com/Blizzard/node-rdkafka#windows) also fails, then we need to be install Visual Studio with the following workloads:
    - Python development
    - Node.js development
    - Desktop development with C++
    - Linux and embedded development with C++