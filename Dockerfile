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
# Open port
EXPOSE 3030/tcp
# Setting envs
ENV GRPC_SERVICE loadbalancer:5000
ENV HOST 0.0.0.0
ENV PORT 3030
# Start project via script
ENTRYPOINT ["node", "out/"]
