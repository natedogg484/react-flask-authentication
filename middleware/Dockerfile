FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN pip install flask flask-cors flask-restful flask-jwt-extended passlib flask-sqlalchemy

ENTRYPOINT ['Flask']
CMD ['run', '--host=0.0.0.0']