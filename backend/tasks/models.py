from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    owner = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    priority = models.IntegerField(default=1)  # 1 = Low, 2 = Medium, 3 = High
    due_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title
