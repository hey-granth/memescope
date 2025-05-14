from django.urls import path
from .views import trending_memes

urlpatterns = [
    path('api/memes/', trending_memes, name='trending'),
]