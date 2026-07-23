// Start date (21 December 2025, 12:00 AM)
const startDate = new Date("December 21, 2025 00:00:00").getTime();

function updateCounter() {

    const now = new Date().getTime();

    let difference = now - startDate;

    // If the date hasn't arrived yet
    if (difference < 0) {
        difference = 0;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter, 1000);
