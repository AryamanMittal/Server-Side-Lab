// Function to display the current time in HH:MM:SS format
function displayCurrentTime() {
  // Create a new Date object to get the current time
  const currentTime = new Date();

  // Extract hours, minutes, and seconds from the date object
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  console.log(`${hours}:${minutes}:${seconds}`);
}

function startClock() {
  setInterval(displayCurrentTime, 1000);
}
startClock();
