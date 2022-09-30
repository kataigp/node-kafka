# Configure Istio
1. install istioctl https://github.com/istio/istio/releases/tag/1.15.1
1. `istioctl install`
1. `kubectl get ns` istio-system is the new one
1. `kubectl label namespace kafka istio-injection=enabled`
1. `kubectl delete pods,svc,statefulsets --all -n kafka`
1. `kubectl apply` kafka.yaml, kafka-ui.yaml, zookeper.yaml
1. download addons:
    1. grafana
    1. prometheus
    1. kiali
    1. jaeger
`kubectl port-forward -n istio-system svc/kiali 20001:20001`

https://www.youtube.com/watch?v=voAyroDb6xk&t=0s&ab_channel=TechWorldwithNana

