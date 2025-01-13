'use strict';

function sayGreeting() {
  const date = new Date();
  const hrs = date.getHours();
  let broham = 'broham';
  let greeting;

  if (hrs < 4) {
    greeting = `You're a night owl, ${broham}.`;
  } else if (hrs < 7) {
    greeting = `Coffee time.`;
  } else if (hrs < 11) {
    greeting = `Hello. Good morning.`;
  } else if (hrs < 13) {
    greeting = `${broham}, it's time for lunch.`;
  } else if (hrs < 17) {
    greeting = `Good afternoon, ${broham}.`;
  } else if (hrs < 19) {
    greeting = `Beef. It's what's for dinner.`;
  } else if (hrs < 22) {
    greeting = `Welcome. Good evening.`;
  } else {
    greeting = `${broham}, go to bed.`;
  }

  document.getElementById('greeting').innerText = greeting.toLocaleUpperCase();
  document.getElementById('greeting').textContent = greeting.toLocaleUpperCase();
}

sayGreeting();
