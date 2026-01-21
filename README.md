OTT-Insights  
A Modern, Lightweight OTT Analytics Dashboard using FastAPI, Pandas & Chart.js

OTT-Insights is a full-stack analytics dashboard designed to analyze OTT streaming patterns using a minimal and clean UI.  
Built with a production-grade FastAPI backend and a professional dark-theme frontend, it processes real OTT-style datasets (5,000+ records) and visualizes:

Top Genres  
Most Watched Shows  
Daily Watch Time Trends  
User-Specific Insights  

This project is suitable for academic submission, portfolio use, and real-world analytics demos.

Project Structure

OTT-Insights/
│
├── backend/
│ ├── main.py
│ ├── requirements.txt
│ ├── services/
│ │ └── analytics.py
│ └── datasets/
│ └── ott_data.csv
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
│
└── README.md

Tech Stack

Backend
- FastAPI  
- Uvicorn  
- Pandas  
- Python 3.10+  

Frontend
- HTML5  
- CSS (Professional Dark Theme)  
- Chart.js  
- Vanilla JavaScript  

Features

FastAPI-Powered Analytics
- Aggregates watch-time per genre  
- Identifies top 10 shows  
- Generates daily watch-time trends  
- Computes user-level stats:
  - Total watch time  
  - Favorite genre  
  - Favorite show  
  - Number of active days  

Frontend Dashboard
- Clean dark professional UI  
- Sidebar navigation  
- Collapsible cards  
- Bar & Line charts with Chart.js  
- User insight search panel  

API Endpoints

| Endpoint | Description |
|---------|-------------|
| **GET /genres** | Returns total watch-time aggregated by genre |
| **GET /shows** | Returns top watched shows |
| **GET /daily** | Returns daily watch-time |
| **GET /user/{user_id}** | Returns detailed user analytics |

Dataset Details

This project uses a synthetic OTT dataset containing **5000 records**, generated with Python.  
Each row includes:
user_id, show_name, genre, watch_time_minutes, date

Ideal for:
- Streaming analytics  
- BDA assignments  
- Data pipeline demos  
- Portfolio visualization  

How to Run

Backend
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload

The API will be available at: http://127.0.0.1:8000

Frontend

Open frontend/index.html directly
OR
Use VS Code Live Server.

Dashboard Preview

<img width="1911" height="883" alt="image" src="https://github.com/user-attachments/assets/4b5b0bcf-ae19-469b-ab31-c10856423711" />

Genre Distribution (Bar Chart)
Top Shows (Bar Chart)
Daily Watch Trend (Line Chart)
User Stats Panel

Future Enhancements

KPI cards (views today, total users, avg watch time)
Filters (genre, date range, show category)
Device/Platform analytics
Export to CSV / PDF
Online deployment (Render / Vercel)

Author

Suhas GS
Project built for OTT analytics and BDA-based data processing using Python.
