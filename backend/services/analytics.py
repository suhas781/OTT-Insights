import pandas as pd

# Load OTT dataset
def load_data():
    df = pd.read_csv("datasets/ott_data.csv")
    return df

def top_genres():
    df = load_data()
    return (
        df.groupby("genre")["watch_time_minutes"]
        .sum()
        .sort_values(ascending=False)
        .to_dict()
    )

def top_shows():
    df = load_data()
    return (
        df.groupby("show_name")["watch_time_minutes"]
        .sum()
        .sort_values(ascending=False)
        .to_dict()
    )

def daily_watch_time():
    df = load_data()
    return df.groupby("date")["watch_time_minutes"].sum().to_dict()

def user_watch_stats(user_id: str):
    df = load_data()
    user_data = df[df["user_id"] == user_id]

    if user_data.empty:
        return {"error": "User not found"}

    return {
        "total_watch_time": int(user_data["watch_time_minutes"].sum()),
        "favorite_genre": user_data["genre"].value_counts().idxmax(),
        "favorite_show": user_data["show_name"].value_counts().idxmax(),
        "days_active": user_data["date"].nunique(),
    }
