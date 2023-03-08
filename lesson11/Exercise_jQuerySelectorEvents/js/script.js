$("#exampleButtonId").on("click", function () {
  var attributeContent = $("#imageId").attr("src");
  $(this).text(attributeContent);
});

//ex1
$("#fontSizeChangeButtonId").on("click", () => {
  $("h2").css("font-size", "40px");
});

//ex2
$("#textButtonId").on("click", () => {
  $("#textButtonId").text("something");
});

//ex3
$("#imageId").on("click", () => {
  let src = $("#imageId").attr("src");
  if (src == "images/sad.jpg") {
    $("#imageId").attr("src", "images/glad.jpg");
    console.log("make happy");
  }
  if (src == "images/glad.jpg") {
    $("#imageId").attr("src", "images/sad.jpg");
  }
});

//ex4
$("u").on("click", () => {
  console.log($("u").text());
  if ($("u").text() == "NOT") {
    $("u").text("NEVER");
  }
  else {
    $("u").text("NOT");
  }
});

//ex5
$("li").on("click", function() {
  let value = $(this).attr("value");
  $("#spanFieldId").text(value);
});

//ex6
$(document).on("click", function(event) {
  let x = event.pageX;
  let y = event.pageY;
  $("#xcoordId").text(x);
  $("#ycoordId").text(y);
});

//ex7
function pickRandom(min, max) {
  return Math.floor(Math.random() * (max -  min + 1)) + min;
}
$("#colorBox1Id").on("mouseenter", function() {
  let colours = ["blue", "red", "yellow", "green"];
  let index = pickRandom(0, 3);
  $(this).css("background-color", colours[index]);
});

//ex8
$("#textFieldId").on("keyup", function() {
  let colours = ["blue", "red", "yellow", "green"];
  let index = pickRandom(0, 3);
  $("#colorBox1Id").css("background-color", colours[index]);
});

//ex9
$("#textFieldId").on("focus", function() {
  $("#colorBox2Id").css("background-color", "green");
});
$("#textFieldId").on("blur", function() {
  $("#colorBox2Id").css("background-color", "black");
});