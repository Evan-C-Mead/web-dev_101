'use strict';

function sayThankYou() {
  const date = new Date();
  const hrs = date.getHours();
  let friend = 'friend';
  let thankYou;

  if (hrs < 9) {
    thankYou = `Ending soon. Thanks for stopping by, ${friend}.`;
  } else {
    thankYou = `Thank you. See you next time, ${friend}.`
  }

  document.getElementById('thank-you').innerText = thankYou.toLocaleUpperCase();
  document.getElementById('thank-you').innerHTML = thankYou.toLocaleUpperCase();
  document.getElementById('thank-you').textContent = thankYou.toLocaleUpperCase();
}

sayThankYou();
