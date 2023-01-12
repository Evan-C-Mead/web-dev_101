"use strict";

function displayTime() {
    // building time variables for clock
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let tod = "AM";

    if (hr == 0) {
        hr = 12;
    }

    if (hr > 12) {
        hr = hr - 12;
        tod = "PM";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hr + ":" + min + ":" + sec + " " + tod;

    document.getElementById("time").innerText = time;
    document.getElementById('time').innerHTML = time;
    document.getElementById('time').textContent = time;

    setTimeout(displayTime, 1000);
}

displayTime();