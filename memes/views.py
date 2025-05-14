from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Meme
from .serializers import MemeSerializer

@api_view(['GET'])
def trending_memes(request):
    memes = Meme.objects.order_by('-upvotes')[:20]
    serializer = MemeSerializer(memes, many=True)
    return Response(serializer.data)