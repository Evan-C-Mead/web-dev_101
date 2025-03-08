'use strict';

function sayOops() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let oops;

  if (hrs < 4) {
    oops = `... '-' ...`
  } else if (hrs < 8) {
    oops = `You weren't supposed to see this...`
  } else if (hrs < 22) {
    oops = `${broham}, select a source.`
  } else {
    oops = `Oops. Please standby.`
  }

  document.getElementById('oops').innerText = oops.toLocaleUpperCase();
  document.getElementById('oops').textContent = oops.toLocaleUpperCase();
}

sayOops();
