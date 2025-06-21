'use strict';

function sayThankYou() {
  const date = new Date();
  const hrs = date.getHours();
  let thankYou;

  if (hrs < 9) {
    thankYou = `Thank you. See you next time.`;
  } else {
    thankYou = `Thanks for tuning in. See you next time.`
  }

  document.getElementById('thank-you').textContent = thankYou.toUpperCase();
}

sayThankYou();
