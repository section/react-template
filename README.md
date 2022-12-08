# Deploy a React App on Section Tutorial

This repo holds the sample code for usage with the tutorials hosted on Section.io's documentations.

Refer to [Tutorials/React](https://www.section.io/docs/tutorials/react) for detailed instructions on deploying.

```bash
USERNAME=section
IMAGENAME=react
TAG=0.0.1

docker build . -t $USERNAME/$IMAGENAME:$TAG
docker push $USERNAME/$IMAGENAME:$TAG
```