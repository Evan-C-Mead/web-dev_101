'use strict';

function displayTime() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let tod = 'AM';
  let dayOfWeek = date.getDay();
  let month = date.getMonth();
  let dayOfMonth = date.getDate();
  let year = date.getFullYear();

  // sets 00 hr to 12 for an analog/standard time reading
  if (hr == 0) {
    hr = 12;
  }

  // sets 'tod' to PM if the time is currently past noon
  if (hr > 12) {
    hr = hr - 12;
    tod = 'PM';
  }

  // adds a '0' to the front of the returning variable if it is less than 10 so the variable will always display two numbers. by default, any number less than 10 returns a single digit -> '7' vs '07'
  hr = hr < 10 ? '0' + hr : hr;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  // converts 'dayOfWeek' from it's returned int into a string that represents a corresponding day of the week
  switch (dayOfWeek) {
    case 0:
      dayOfWeek = 'Sunday';
      break;
    case 1:
      dayOfWeek = 'Monday';
      break;
    case 2:
      dayOfWeek = 'Tuesday';
      break;
    case 3:
      dayOfWeek = 'Wednesday';
      break;
    case 4:
      dayOfWeek = 'Thursday';
      break;
    case 5:
      dayOfWeek = 'Friday';
      break;
    case 6:
      dayOfWeek = 'Saturday';
      break;
  }

  // converts 'month' from it's returned int into a string that represents a corresponding month
  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  }

  let time = `${dayOfWeek} | ${month} ${dayOfMonth}, ${year} | ${hr}:${min}:${sec} ${tod}`;
  let styledTime = time.replace(/\|/g, `<span id="vertLine" class="vertLine" style="color: #ffb700;">|</span>`);

  document.getElementById('time').innerHTML = styledTime.toLocaleUpperCase();
  setTimeout(displayTime, 1000);
}

displayTime();
