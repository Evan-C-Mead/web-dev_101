'use strict';

function sayOops() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let oops;

  if (hrs < 6) {
    oops = `More coffee ${broham}?`;
  } else if (hrs < 12) {
    oops = `Oops. Please standby.`;
  } else if (hrs < 18) {
    oops = `You weren't supposed to see this...`;
  } else {
    oops = `Please select a source.`;
  }

  document.getElementById('oops').textContent = oops.toUpperCase();
  setTimeout(sayOops, 1000);
}

sayOops();
