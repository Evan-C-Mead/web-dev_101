'use strict';

function displayTime() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let tod = 'AM';
  // indices align with date.getDay() and date.getMonth() return values (0-based)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dayOfWeek = days[date.getDay()];
  let month = months[date.getMonth()];
  let dayOfMonth = date.getDate();
  let year = date.getFullYear();

  // sets 'tod' to PM if the time is currently past noon
  if (hr >= 12) {
    tod = 'PM';
  }
  if (hr > 12) {
    hr = hr - 12;
  }
  // sets 00 hr to 12 for an analog/standard time reading
  if (hr === 0) {
    hr = 12;
  }

  // adds a '0' to the front of the returning variable if it is less than 10 so the variable will always display two digits. by default, any number less than 10 returns a single digit -> '7' vs '07'
  hr = hr < 10 ? '0' + hr : hr;
  min = min < 10 ? '0' + min : min;

  let time = `${dayOfWeek} | ${month} ${dayOfMonth}, ${year} | ${hr}:${min} ${tod}`.toUpperCase();
  let styledTime = time.replace(/\|/g, `&nbsp;<span id="vertLine" class="vertLine" style="color: #ffb700;">|</span>&nbsp;`);

  document.getElementById('time').innerHTML = styledTime;
  setTimeout(displayTime, 1000);
}

displayTime();
