FROM django:latest

WORKDIR /users-ms

COPY . .

RUN cd /users-ms

EXPOSE 8000/tcp

ENTRYPOINT ["python", "manage.py", "runserver"]