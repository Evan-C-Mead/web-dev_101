'use strict';

function sayThankYou() {
  const date = new Date();
  const hrs = date.getHours();
  let thankYou;

  if (hrs < 12) {
    thankYou = `Thanks for tuning in. See you next time.`;
  } else {
    thankYou = `See you next time. Thanks for dropping by.`
  }

  document.getElementById('thank-you').textContent = thankYou.toUpperCase();
}

sayThankYou();
