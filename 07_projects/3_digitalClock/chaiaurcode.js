const clock = document.getElementById("clock");

setInterval(() => {
  time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
}
, 1000);