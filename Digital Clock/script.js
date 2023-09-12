const clock = document.getElementById('clock');
const dateDisplay = document.getElementById('date');

setInterval(function () {
  let now = new Date();

  // Formats the time as HH:MM:SS
  const time = now.toLocaleTimeString();

  // Formats the date as "Day, Month Date, Year"
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString(undefined, options);

  clock.innerHTML = time;
  dateDisplay.innerHTML = date;
}, 1000);
