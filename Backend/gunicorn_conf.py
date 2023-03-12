# Gunicorn config variables
loglevel = "info"
errorlog = "-"  # stderr
accesslog = "-"  # stdout
worker_tmp_dir = "/dev/shm"
graceful_timeout = 120
timeout = 120
keepalive = 5
threads = 3
worker_class = "geventwebsocket.gunicorn.workers.GeventWebSocketWorker"
wsgi_app = "src:app"
#capture_output= True