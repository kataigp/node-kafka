# Using local Kafka 

## Why

From various purpose we might need run a Kafka locally, we want to, i.e.:
- test our consumer/producer application
- debug our kafka system / application
- try some new settings directly on kafka

## How

We basicly have 3 different way to achieve this, from the least complex to the most complex:
1. [docker-compose solution](./docs/docker-compose-kafka.md)
1. **Kafka on k8s:**
    1. [port-forwarding](./docs/k8s-port-forward.md)
    1. [strimzi operator](./docs/k8s-with-strimzi.md)
    1. [headless service and LoadBalancer](./docs/k8s-headless-service.md)

*. [add Istio](add-istio.cmd)

## Prerequisits
- node
- docker

## Useful kubernetes commands

`kubectl get pods,deployments,services -n NAMESPACE`

`kubectl delete pods,deployments,services --all -n NAMESPACE`

`kubectl get jobs`

`kubectl get all --all-namespaces`

`kubectl scale statefulsets --all -n kafka --replicas=0`

## More about Kafka
- https://rmoff.net/2018/08/02/kafka-listeners-explained/

## Related technologies
- [kompose](https://kompose.io/) to conert docker-compose,yml to k8s CRD
- [Helm](https://helm.sh/) package manager if want to use charts
- [kafka-ui](https://github.com/provectus/kafka-ui)