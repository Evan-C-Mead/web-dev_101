"use strict";

(function () {

    function add(a, b) {
        return a + b;
    }
    console.log(add(3, 6));

    let pies = [
        "apple",
        "cherry",
        "key lime",
        "huckleberry",
        "rhubarb"
    ];

    let carMakes = [
        "acura",
        "chevy",
        "ford",
        "honda",
        "tesla",
        "volkswagen"
    ];

    // given the above array how do we log each element to the console?

    // for (var i = 0; i < pies.length; i++) {
    //     console.log(pies[i]);
    // }

    // pies.forEach(function (pie) {
    //     console.log(pie);
    // })

    function displayArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    displayArray(pies);
    console.log("\n");
    displayArray(carMakes);
    console.log("\n");

    function arrayCount(arr) {
        console.log("The array count is " + arr.length);
    }
    arrayCount(pies);
    arrayCount(carMakes);
    console.log("\n");

    console.log(pies.concat(carMakes));
})();