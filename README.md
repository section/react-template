# Deploy a React App on Section Tutorial

This repo holds the sample code for usage with the tutorials hosted on Section.io's documentations.

Refer to [Tutorials/React](https://www.section.io/docs/tutorials/react) for detailed instructions on deploying.

```bash
# Build and push react image
USER=section
IMAGENAME=react
TAG=0.0.1

docker build . --tag ghcr.io/$USER/$IMAGENAME:$TAG
docker push ghcr.io/$USER/$IMAGENAME:$TAG

# Deploy k8s yamls
# - Change image name in k8s/webapp-deployment.yaml if using your own image instead
kubectl apply -f ./k8s/
```
