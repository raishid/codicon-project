FROM tiangolo/uwsgi-nginx-flask:python3.8

WORKDIR /home/app

RUN mkdir -p /home/app

COPY . /home/app

# Install dependencies
RUN pip install -r requirements.txt

EXPOSE 8002

CMD ["gunicorn", "--conf", "/home/app/gunicorn_conf.py", "--bind", "0.0.0.0:8002", "wsgi:application"]

