(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // Set the release date
  let releaseDate = new Date("07/04/2023 00:00:00"); // Change the release date and time here

  const countDown = releaseDate.getTime(),
        x = setInterval(function() {    
          const now = new Date().getTime(),
                distance = countDown - now;


          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);


          // Do something later when the date is reached
          if (distance < 0) {
            document.getElementById("days").innerText = "0",
            document.getElementById("hours").innerText = "0",
            document.getElementById("minutes").innerText = "0",
            document.getElementById("seconds").innerText = "0";

            clearInterval(x);
          }
        }, 0);
})();
