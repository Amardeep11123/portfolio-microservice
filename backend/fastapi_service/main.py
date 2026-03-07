from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

@app.get("/health")
async def health():
    return {
        "status": "ok",
        "service": "FastAPI Microservice",
        "timestamp": datetime.utcnow()
    }

@app.get("/process/{event_id}")
async def process_event(event_id: int):
    return {
        "event_id": event_id,
        "summary": f"Event {event_id} processed successfully",
        "processed_at": datetime.utcnow()
    }