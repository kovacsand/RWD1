let exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";
document.getElementById("firstFieldId").innerHTML = "number 15";
document.getElementById("firstLineId").innerHTML += "number 18";

let animals = ["Cat", "Dog", "Parrot"];
document.getElementById("secondLineId").innerHTML = animals[0] + ", " + animals[1] + ", " + animals[2];

document.querySelectorAll(".fruitClass")[0].innerHTML = "Apple";
document.querySelectorAll(".fruitClass")[1].innerHTML = "Banana";


document.getElementById("thirdLineId").innerHTML = "<u>" + document.getElementById("thirdLineId").innerHTML + "</u>";

document.getElementById("fourthLineId").innerHTML += "<ul><li>" + animals[0] + "</li><li>" + animals[1] + "</li><li>" + animals[2] + "</li></ul>"



