window.onload = function() {
  
    // Rest of the code here
  
    var countDownDate = new Date("July 1, 2023 00:00:00").getTime();
  
    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Add leading zeros for tens digits less than 10
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      var dayEl = document.getElementById('days');
      dayEl.innerHTML = days;
      var hoursEl = document.getElementById('hours');
      hoursEl.innerHTML = hours;
      var minutesEl = document.getElementById('minutes');
      minutesEl.innerHTML = minutes;
      var secondsEl = document.getElementById('seconds');
      secondsEl.innerHTML = seconds;
  
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  
