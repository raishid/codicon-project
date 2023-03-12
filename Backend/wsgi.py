from src import app as application

if __name__ == "__main__":
    application.run(async_mode='gevent_uwsgi')