import praw
from django.core.management.base import BaseCommand
from datetime import datetime, timezone as dt_timezone
from memes.models import Meme
from django.conf import settings

class Command(BaseCommand):
    help = 'Fetch latest memes from Reddit'

    def handle(self, *args, **options):
        reddit = praw.Reddit(
            client_id=settings.REDDIT_CLIENT_ID,
            client_secret=settings.REDDIT_CLIENT_SECRET,
            user_agent=settings.REDDIT_USER_AGENT
        )
        subreddit = reddit.subreddit('memes')
        for post in subreddit.hot(limit=50):
            Meme.objects.update_or_create(
                title=post.title,
                subreddit=post.subreddit.display_name,
                timestamp=datetime.fromtimestamp(post.created_utc, tz=dt_timezone.utc),                defaults={
                    'upvotes': post.score,
                    'comments': post.num_comments,
                    'image_url': post.url,
                }
            )
        self.stdout.write(self.style.SUCCESS('Fetched memes successfully.'))