from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.analytics import top_genres, top_shows, daily_watch_time, user_watch_stats

app = FastAPI(title="OTT Insights API")

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def root():
    return {"message": "OTT Insights API is running"}

@app.get("/genres")
def genres():
    return {"top_genres": top_genres()}

@app.get("/shows")
def shows():
    return {"top_shows": top_shows()}

@app.get("/daily")
def daily():
    return {"daily_watch_time": daily_watch_time()}

@app.get("/user/{user_id}")
def user_stats(user_id: str):
    return user_watch_stats(user_id)
