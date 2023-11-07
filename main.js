import './style.sass'
function countdownTimer(targetDate) {
    // Get the current date and time
    const currentDate = new Date();
  
    // Calculate the time difference between the current date and the target date
    const timeDifference = targetDate - currentDate;
  
    if (timeDifference <= 0) {
      console.log("Countdown expired!");
      return;
    }
  
    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60) / 1000));
  
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds


    // Call the function again after 1 second
    setTimeout(() => {
      countdownTimer(targetDate);
    }, 1000);
}
//Target Date  
const targetDate = new Date("2023-11-30T12:00:00Z");
//Call the function
countdownTimer(targetDate);
  