'use strict';

function sayGreeting() {
  const date = new Date();
  const hrs = date.getHours();
  let friend = 'friend';
  let greeting;

  if (hrs < 4) {
    greeting = `You're a night owl ${friend}.`;
  } else if (hrs < 7) {
    greeting = `Coffee time.`;
  } else if (hrs < 11) {
    greeting = `Good morning, ${friend}.`;
  } else if (hrs < 13) {
    greeting = `${friend}, it's lunch time.`;
  } else if (hrs < 17) {
    greeting = `Good afternoon, ${friend}.`;
  } else if (hrs < 19) {
    greeting = `Beef. It's what's for dinner.`;
  } else if (hrs < 22) {
    greeting = `Good evening, ${friend}.`;
  } else {
    greeting = `${friend}, go to bed.`;
  }

  document.getElementById('greeting').innerText = greeting.toLocaleUpperCase();
  document.getElementById('greeting').innerHTML = greeting.toLocaleUpperCase();
  document.getElementById('greeting').textContent =
    greeting.toLocaleUpperCase();
}

sayGreeting();
