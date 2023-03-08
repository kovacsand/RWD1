let listItemArray = document.getElementsByTagName("li");
let colours = ["red", "blue", "green", "black", "white"];

listItemArray[0].innerHTML = listItemArray[0].innerHTML + " " + add_two_numbers(5, 7);
listItemArray[1].innerHTML = listItemArray[1].innerHTML + " " + multiplyThree(5, 7, 9);
listItemArray[2].innerHTML = listItemArray[2].innerHTML + " " + circleArea(2);
listItemArray[3].innerHTML = listItemArray[3].innerHTML + " " + colours[pickRandom(0, 4)];
listItemArray[4].innerHTML = listItemArray[4].innerHTML + "<br /> " + showCurrentDate() + "<br /> " + daysSince(1, 1, 2015);
listItemArray[5].innerHTML = listItemArray[5].innerHTML + "<br /> " + isNumberOdd(daysSince(1, 1, 2015));
//let value1 = 0, value2 = 5;
// incrementValueFor(1, value1, 10);
// document.getElementById("counter1Id").innerHTML += value1;



//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}

function multiplyThree(a, b, c) {
    return a * b * c;
}

function circleArea(radius) {
    return Math.pow(radius, 2) * Math.PI;
}

function pickRandom(min, max) {
    return Math.floor(Math.random() * (max -  min + 1)) + min;
}

function showCurrentDate() {
    return Date();
}

function daysSince(day, month, year) {
    return Math.floor((Date.now() - new Date(year, month - 1, day)) / (1000 * 60 * 60 * 24));
}

function isNumberOdd(number) {
    if (number % 2 == 1)
        return "ODD";
    else
        return "EVEN";
}

// //waits /time/ seconds, and then increments the value
// function incrementValue(time, value) {
//     setTimeout(function () {
//         value++;
//         console.log("HELLO");
//     }, time*1000);
// }
//
// let incrementValue = setInterval(function(time, value) {
//
// })
//
// function incrementValueFor(time, value, length) {
//     let counter = 0;
//     while (counter < length) {
//         incrementValue(time, value);
//         counter++;
//     }
// }

let counter = 0;

let value1 = 10, diff1 = 1, time1 = 1000;
let value2 = 10, diff2 = 2, time2 = 2000;

let repeatedIncrement = setInterval(function () {
    if (counter >= 5) {
        clearInterval(repeatedIncrement);
    } else {
        counter++;
        incrementWithAfter1(diff1, time1);
        incrementWithAfter2(diff2, time2);
    }
}, 1000);



function incrementWith1(diff){
    value1 += diff;
    document.getElementById("counter1Id").innerHTML = "Counter 1: " + value1;
}

function incrementWithAfter1(diff, time) {
    setInterval('incrementWith1(' + diff + ')', time);
    clearInterval(incrementWith1);
}

function incrementWith2(diff){
    value2 += diff;
    document.getElementById("counter2Id").innerHTML = "Counter 2: " + value2;
}

function incrementWithAfter2(diff, time) {
    setInterval('incrementWith2(' + diff + ')', time);
}