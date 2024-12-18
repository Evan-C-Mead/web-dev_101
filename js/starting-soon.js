'use strict';

function startingSoon() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let startSoon;

  if (hrs < 8) {
    startSoon = `Hello! See you soon.`;
  } else if (hrs < 16) {
    startSoon = `${broham} is on the way.`;
  } else {
    startSoon = `Be right there. Starting soon.`
  }

  document.getElementById('starting-soon').innerText = startSoon.toLocaleUpperCase();
  document.getElementById('starting-soon').textContent = startSoon.toLocaleUpperCase();
}

startingSoon();
