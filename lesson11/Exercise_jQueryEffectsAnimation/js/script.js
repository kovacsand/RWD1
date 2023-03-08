// Call to function
$("#orangeBoxId").animate({ left: "+=200" }, "slow", function () {
  squareMovement(this);
});

// Declaration of function
function squareMovement(IdRef) {
  $(IdRef)
      .delay(1000)
    .animate({ top: "+=100" })
      .delay(1000)
    .animate({ left: "+=100" })
      .delay(1000)
    .animate({ top: "-=100" })
      .delay(1000)
    .animate({ left: "-=100" }, function () {
      squareMovement(IdRef);
    });
}

//ex1
let stopX, stopY;
$("#stopButtonId").on("click", function() {
    $("#orangeBoxId").stop(true);
})

//ex2
$("#startButtonId").on("click", function() {
    squareMovement("#orangeBoxId");
})

//ex3

function pickRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#greenBoxId").on("mouseenter", function () {
    $(this).animate({left: pickRandom(0, $(window).width()-$(this).width()), top: pickRandom(0, $(window).height()-$(this).height())});
})

//ex4
$("div").on("click", function() {
    console.log("clicked");
    if (pickRandom(0, 1) === 0)
        $(this).fadeOut();
    else
        $(this).slideUp();
})

//ex5
$("#showButtonId").on("click", function () {
    $("div").show();
})

//ex6
$(document).on("keydown", function(event) {
    if (event.keyCode == 37)
        $("#blueBoxId").animate({left: "-=10"}, 50);
    if (event.keyCode == 38)
        $("#blueBoxId").animate({top: "-=10"}, 50);
    if (event.keyCode == 39)
        $("#blueBoxId").animate({left: "+=10"}, 50);
    if (event.keyCode == 40)
        $("#blueBoxId").animate({top: "+=10"}, 50);
});

// $(window).on("keydown", function (event) {
//     let blueX = $("#blueBoxId").offset().left;
//     let blueY = $("#blueBoxId").offset().top;
//
//     switch (event.keyCode) {
//         case 37:
//             blueX -= 10;
//             break;
//         case 39:
//             blueX += 10;
//             break;
//         case 38:
//             blueY -= 10;
//             break;
//         case 40:
//             blueY += 10;
//             break;
//     }
//
//     $("#blueBoxId").offset({ top: blueY, left: blueX });
// });