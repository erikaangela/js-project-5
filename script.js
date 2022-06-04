
setInterval(time, 1000); // calls time() every 1000 milliseconds

function time() {
  const date = new Date(); // represents current date and time
  document.getElementById("clock").innerText = date.toLocaleTimeString(); // returns local time
}
