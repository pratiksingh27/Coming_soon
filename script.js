var countDownDate = new Date("Oct 16, 2023 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  // console.log('distance', distance);

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    /* hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds; */

    if(days < 10){
        document.getElementById("days").innerHTML = "0" + days;
    }
    if(hours < 10){
        document.getElementById("hours").innerHTML = "0" + hours;
    }
    if(minutes < 10){
        document.getElementById("min").innerHTML = "0" + minutes;
    }
    if(seconds < 10){
        document.getElementById("sec").innerHTML = "0" + seconds;
    }

    if(distance< 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }

}, 1000);
