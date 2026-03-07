from django.urls import path
from .views import process_event

urlpatterns = [
    path("process/<int:event_id>/", process_event),
]