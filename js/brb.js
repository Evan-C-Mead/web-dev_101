'use strict';

function sayBRB() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let brb;

  if (hrs < 8) {
    brb = `${broham} will be right back.`;
  } else if (hrs < 16) {
    brb = `${broham} will return shortly.`
  } else {
    brb = `Coffee refill. Hang tight.`;
  }

  document.getElementById('brb').textContent = brb.toUpperCase();
}

sayBRB();
