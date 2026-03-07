import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event
from datetime import datetime
from django.utils import timezone


FASTAPI_URL = "http://fastapi:8001"

@api_view(['GET'])
def process_event(request, event_id):
    try:
        response = requests.get(f"{FASTAPI_URL}/process/{event_id}",
        timeout=5
        )
        data = response.json()

        # Save to DB
        event = Event.objects.create(
            event_id=data["event_id"],
            summary=data["summary"],
            processed_at=timezone.now()
        )

        return Response({
            "message": "Event saved successfully",
            "event_id": event.event_id,
            "summary": event.summary,
            "processed_at": event.processed_at
        })

    except Exception as e:
        return Response({"error": str(e)}, status=500)

@api_view(['GET'])
def health(request):
    return Response({"status": "ok"})

