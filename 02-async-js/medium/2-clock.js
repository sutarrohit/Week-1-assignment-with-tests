function getCurrentTime() {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let AmPm = "";

  // Format hours in 12-hour format and determine AM/PM
  if (hours >= 12) {
    AmPm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  } else {
    AmPm = "AM";
    if (hours === 0) {
      hours = 12;
    }
  }

  // Display time in different formats
  const time24hr = `${hours}:${minutes}:${seconds}`;
  const time12hr = `${hours}:${minutes}:${seconds} ${AmPm}`;

  console.log(`24-hour format: ${time24hr}`);
  console.log(`12-hour format: ${time12hr}`);
}

// Update the clock every second
setInterval(getCurrentTime, 1000);
