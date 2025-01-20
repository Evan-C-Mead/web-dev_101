'use strict';

function startingSoon() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let startSoon;

  if (hrs < 16) {
    startSoon = `${broham} is almost ready.`;
  } else {
    startSoon = `Hang tight. ${broham} is on the way.`
  }

  document.getElementById('starting-soon').innerText = startSoon.toLocaleUpperCase();
  document.getElementById('starting-soon').textContent = startSoon.toLocaleUpperCase();
}

startingSoon();
