const clock = document.getElementById("clock");
setInterval(() => {
  time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
}
, 1000);
const calander = document.getElementById("calander");
setInterval(() => {
    time = new Date();
    calander.innerHTML = time.toLocaleDateString();
    }
, 1000);
const day = document.getElementById("day");
setInterval(() => {
    time = new Date();
    day.innerHTML = time.toLocaleString('default', { weekday: 'long' });
    }
, 1000);
const month = document.getElementById("month");
setInterval(() => {
    time = new Date();
    month.innerHTML = time.toLocaleString('default', { month: 'long' });
    }
, 1000);
const year = document.getElementById("year");
setInterval(() => {
    time = new Date();
    year.innerHTML = time.getFullYear();
    }
, 1000);
