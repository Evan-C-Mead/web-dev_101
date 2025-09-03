'use strict';

function sayBRB() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let brb;

  if (hrs < 16) {
    brb = `Be right back. Please standby.`;
  } else {
    brb = `${broham} will be right back.`;
  }

  document.getElementById('brb').textContent = brb.toUpperCase();
}

sayBRB();
