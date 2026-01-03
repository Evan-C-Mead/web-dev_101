'use strict';

function startingSoon() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let startSoon;

  if (hrs < 16) {
    startSoon = `${broham} will be here soon.`;
  } else {
    startSoon = `Hang tight. ${broham} is on the way.`
  }

  document.getElementById('starting-soon').textContent = startSoon.toUpperCase();
}

startingSoon();
