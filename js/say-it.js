"use strict";

(function () {
    function sayIt() {
        let count = 0;
        let x = 1;
        let randCount = Math.floor(Math.random() * 10 + 1)
        for (x; x <= randCount; x++) {
            count++;
            console.log(`this is sentence #${count}`);
        }
    }

    sayIt();
})();