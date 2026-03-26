'use strict';

function sayBRB() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let brb;

  if (hrs < 8) {
    brb = `Coffee refill. Hang tight.`;
  } else if (hrs < 16) {
    brb = `${broham} will return shortly.`
  } else {
    brb = `${broham} will be right back.`;
  }

  document.getElementById('brb').textContent = brb.toUpperCase();
  setTimeout(sayBRB, 1000);
}

sayBRB();
