'use strict';

function sayOops() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let friend = 'friend';
  let oops;

  if (hrs < 4) {
    oops = `... '-' ...`
  } else if (hrs < 8) {
    oops = `You weren't supposed to see this...`
  } else if (hrs < 16) {
    oops = `${broham}, please select a source.`
  } else {
    oops = `Oops. Standby, ${friend}.`
  }

  document.getElementById('oops').innerText = oops.toLocaleUpperCase();
  document.getElementById('oops').textContent = oops.toLocaleUpperCase();
}

sayOops();
