"use strict";

function sayHello() {
    const date = new Date();
    const hrs = date.getHours();
    let friend = 'friend';
    let greeting;

    if (hrs < 4) {
        greeting = "You're a night owl ";
    }
    else if (hrs < 11) {
        greeting = "Good morning, ";
    }
    else if (hrs < 13) {
        greeting = "Lunch time ";
    }
    else if (hrs < 17) {
        greeting = "Good afternoon ";
    }
    else if (hrs < 22) {
        greeting = "Good evening, ";
    }
    else {
        greeting = "Go to bed ";
    }

    let hello = greeting.toLocaleUpperCase() + "" + friend.toLocaleUpperCase();

    document.getElementById("hello").innerText = hello;
    document.getElementById('hello').innerHTML = hello;
    document.getElementById('hello').textContent = hello;
}

sayHello();