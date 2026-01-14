FROM python:3.7.7-slim-buster

WORKDIR /app

COPY app/requirements.txt ./

RUN pip install -r requirements.txt
RUN pip install protobuf==3.20.1
RUN pip install pip==22.1.2

COPY app /app

CMD [ "python", "main.py" ]
