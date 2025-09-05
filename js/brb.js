'use strict';

function sayBRB() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let brb;

  if (hrs < 7) {
    brb = `Coffee refill. Hang tight.`;
  } else if (hrs < 17) {
    brb = `${broham} will return shortly.`
  } else {
    brb = `${broham} will be right back.`;
  }

  document.getElementById('brb').textContent = brb.toUpperCase();
}

sayBRB();
