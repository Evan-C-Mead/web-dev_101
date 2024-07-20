'use strict';

function sayBRB() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let friend = 'friend';
  let brb;

  if (hrs < 6) {
    brb = `Be right back, ${friend}.`;
  } else if (hrs < 18) {
    brb = `${broham} will be right back.`;
  } else if (hrs < 23){
    brb = `Be right back, ${friend}. Please standby.`;
  } else {
    brb = `Be right back...`
  }

  document.getElementById('brb').innerText = brb.toLocaleUpperCase();
  document.getElementById('brb').innerHTML = brb.toLocaleUpperCase();
  document.getElementById('brb').textContent = brb.toLocaleUpperCase();
}

sayBRB();
