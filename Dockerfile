FROM node:lts-slim
RUN apt-get update && apt-get upgrade -y


WORKDIR /app

EXPOSE 1337

CMD "tail" "-f" "/dev/null"