'use strict';

function sayOops() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let friend = 'friend';
  let oops;

  if (hrs < 6) {
    oops = `You weren't supposed to see this...`;
  } else if (hrs < 12) {
    oops = `${broham} needs to select a source.`
  } else if (hrs < 18) {
    oops = `Oops. Technical difficulties. Standby, ${friend}.`
  } else {
    oops = `... '-' ...`
  }

  document.getElementById('oops').innerText = oops.toLocaleUpperCase();
  document.getElementById('oops').innerHTML = oops.toLocaleUpperCase();
  document.getElementById('oops').textContent = oops.toLocaleUpperCase();
}

sayOops();