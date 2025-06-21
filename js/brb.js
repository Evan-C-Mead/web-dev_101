'use strict';

function sayBRB() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let brb;

  if (hrs < 16) {
    brb = `${broham} will be right back.`;
  } else {
    brb = `Be right back. Please standby.`;
  }

  document.getElementById('brb').textContent = brb.toUpperCase();
}

sayBRB();
