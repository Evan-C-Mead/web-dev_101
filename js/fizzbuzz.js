"use strict";

(function () {
    
    function fizzBuzz() {
        let x = 1;

        for (x; x <= 100; x++) {
            if (x % 5 === 0 && x % 3 === 0) {
                console.log("Fizzbuzz - " + x);
            }
            else if (x % 5 === 0) {
                console.log("Buzz - " + x);
            }
            else if (x % 3 === 0) {
                console.log("Fizz - " + x);
            }
            else {
                console.log(x);
            }
        }
    }

    fizzBuzz();
})();