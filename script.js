// Set the target date and time
const targetDate = new Date("2025-03-31T00:00:00");

function updateClock() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("time-remaining").innerHTML = "Time is up!";
    return;
  }

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // document.getElementById("time-remaining").innerHTML = `
  //   ${years} ${months} ${days} ${hours} ${minutes} ${seconds}
  // `;
  document.getElementById("years").textContent = years;
      document.getElementById("months").textContent = months;
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately to avoid initial delay