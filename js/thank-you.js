'use strict';

function sayThankYou() {
  const date = new Date();
  const hrs = date.getHours();
  let friend = 'friend';
  let thankYou;

  if (hrs < 9) {
    thankYou = `Stream ending. Thanks for stopping by, ${friend}.`;
  } else {
    thankYou = `See you next time, ${friend}. This stream is over.`
  }

  document.getElementById('thank-you').innerText = thankYou.toLocaleUpperCase();
  document.getElementById('thank-you').innerHTML = thankYou.toLocaleUpperCase();
  document.getElementById('thank-you').textContent = thankYou.toLocaleUpperCase();
}

sayThankYou();
