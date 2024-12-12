FROM python:3.9-slim
WORKDIR /app
COPY . /app
RUN pip install gunicorn
CMD ["gunicorn", "-w", "4", "app:app"]

