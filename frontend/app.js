const API = "http://127.0.0.1:8000";

let genreChart, showChart, dailyChart;

// Collapse animation
function toggleCard(header) {
    header.parentElement.classList.toggle("active");
}

/* GENRES */
async function loadGenres() {
    const res = await fetch(API + "/genres").then(r => r.json());
    const labels = Object.keys(res.top_genres);
    const values = Object.values(res.top_genres);

    if (genreChart) genreChart.destroy();

    genreChart = new Chart(document.getElementById("genreChart"), {
        type: "bar",
        data: { labels, datasets: [{ label: "Watch Time", data: values, backgroundColor: "#3a3a3a" }] }
    });
}

/* SHOWS */
async function loadShows() {
    const res = await fetch(API + "/shows").then(r => r.json());
    const labels = Object.keys(res.top_shows).slice(0, 10);
    const values = Object.values(res.top_shows).slice(0, 10);

    if (showChart) showChart.destroy();

    showChart = new Chart(document.getElementById("showChart"), {
        type: "bar",
        data: { labels, datasets: [{ label: "Watch Time", data: values, backgroundColor: "#444" }] }
    });
}

/* DAILY WATCH TIME */
async function loadDaily() {
    const res = await fetch(API + "/daily").then(r => r.json());
    const labels = Object.keys(res.daily_watch_time);
    const values = Object.values(res.daily_watch_time);

    if (dailyChart) dailyChart.destroy();

    dailyChart = new Chart(document.getElementById("dailyChart"), {
        type: "line",
        data: { labels, datasets: [{ label: "Minutes Watched", data: values, borderColor: "#999" }] }
    });
}

/* USER INSIGHTS */
async function fetchUser() {
    const id = document.getElementById("userIdInput").value;
    const data = await fetch(`${API}/user/${id}`).then(r => r.json());

    let card = document.getElementById("userCard");

    if (data.error) {
        card.innerHTML = `<div class="user-stat">❌ ${data.error}</div>`;
        card.style.display = "block";
        return;
    }

    card.innerHTML = `
        <div class="user-stat">Total Watch Time: <span class="user-value">${data.total_watch_time} minutes</span></div>
        <div class="user-stat">Favorite Genre: <span class="user-value">${data.favorite_genre}</span></div>
        <div class="user-stat">Favorite Show: <span class="user-value">${data.favorite_show}</span></div>
        <div class="user-stat">Days Active: <span class="user-value">${data.days_active}</span></div>
    `;
    card.style.display = "block";
}

/* LOAD EVERYTHING */
loadGenres();
loadShows();
loadDaily();
