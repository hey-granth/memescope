from django.db import models

class Meme(models.Model):
    title = models.CharField(max_length=300)
    subreddit = models.CharField(max_length=100)
    upvotes = models.IntegerField()
    comments = models.IntegerField()
    image_url = models.URLField(blank=True)
    timestamp = models.DateTimeField()

    def score(self):
        return self.upvotes + self.comments

    def __str__(self):
        return self.title