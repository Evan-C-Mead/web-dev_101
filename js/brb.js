'use strict';

function sayBRB() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let friend = 'friend';
  let brb;

  if (hrs < 8) {
    brb = `Be right back, ${friend}.`;
  } else if (hrs < 16) {
    brb = `${broham} will be right back.`;
  } else {
    brb = `Be right back, ${friend}. Please standby.`;
  }

  document.getElementById('brb').innerText = brb.toLocaleUpperCase();
  document.getElementById('brb').textContent = brb.toLocaleUpperCase();
}

sayBRB();
