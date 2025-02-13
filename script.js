const startDate = new Date("2023-07-30T03:53:00"); // Укажи дату начала отношений

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("time").textContent = 
        `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateTimer, 1000);
updateTimer();
