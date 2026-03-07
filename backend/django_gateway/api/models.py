from django.db import models

# Create your models here.


class Event(models.Model):
    event_id = models.IntegerField()
    summary = models.TextField()
    processed_at = models.DateTimeField()

    def __str__(self):
        return f"Event {self.event_id}"