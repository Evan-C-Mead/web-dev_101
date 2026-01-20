'use strict';

function sayOops() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let oops;

  if (hrs < 8) {
    oops = `Oops. Please standby.`
  } else if (hrs < 16) {
    oops = `You weren't supposed to see this...`
  } else {
    oops = `${broham}, select a source.`
  }

  document.getElementById('oops').textContent = oops.toUpperCase();
}

sayOops();
