FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

# Intsall dependencies
RUN yarn install
# Install typescript compiler
RUN yarn global add typescript
# Building out folder
RUN tsc -p src/tsconfig.json
# Copy proto file
RUN cp -r src/services/grpc/proto out/services/grpc/
# Start project via script
ENTRYPOINT ["node", "out/"]
