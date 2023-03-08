//MAKE THE MAGIC HAPPEN
function pickRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Initial stuff that should run when page is loaded
let butterflyCounter = 0;
$("#score").append(butterflyCounter);
$(".apple").css("z-index", 5);
$("#net").css("z-index", 3);
$("#butterfly").css("z-index", 5);
$("#wateringcan").css("z-index", 4);
$("#wateringcan").css("transform", "rotate(0deg)");
animateButterfly();

//Butterfly movement - Sofia
function newPosition(){
    const butterflyWidth = 300;
    const butterflyHeight = 200;
    let x = $(window).height() - butterflyHeight;
    let y = $(window).width() - butterflyWidth;

    let newX = pickRandom(0, x);
    let newY = pickRandom(0, y)

    return [newX,newY];
}

function animateButterfly(){
    let newPos = newPosition();
    let oldPos = $("#butterfly").offset();
    let speed = calcSpeed([oldPos.top, oldPos.left], newPos);

    $("#butterfly").animate({ top: newPos[0], left: newPos[1] }, speed, function(){
        animateButterfly();
    });

    function calcSpeed(prev, next) {

        let x = Math.abs(prev[1] - next[1]);
        let y = Math.abs(prev[0] - next[0]);

        let greatest = x > y ? x : y; //greater distance between x and y coordinates

        let speedModifier = 0.2;
        let speed = Math.ceil(greatest/speedModifier);

        return speed;
    }
}

$("#butterfly").mouseover(function (){
    $(this).stop(true)
    $(this).animate({top:newPosition()[0],left:newPosition()[1]}, "fast");
    animateButterfly();
})


//Apples - Andras
//Apples generating randomly
const treeX1 = 1100;
const treeX2 = 1500;
const treeY1 = 200;
const treeY2 = 500;
$(".apple").each(function(){
    $(this).offset({top: pickRandom(treeY1, treeY2), left: pickRandom(treeX1, treeX2)});
});

//Apples onClick
//Basket location
const basketX1 = 390;
const basketX2 = 520;
const basketY = 780;
//Placing basket in front of apples
$("#basketfront").css("z-index", 2);
$(".apple").on("click", function() {
    $(this).css("z-index", 1);
    wiggleMovement(this);
    $(this).animate({top: basketY, left: pickRandom(basketX1, basketX2)});
})
//Apple wiggle
function wiggleMovement(wiggleObjectId) {
    $(wiggleObjectId)
        .animate({deg: 20}, {duration: 400, step: function(event) {
            $(this).css({ transform: "rotate(" + event + "deg)" });
        }})

        .animate({deg: -20}, {duration: 400, step: function(event) {
            $(this).css({ transform: "rotate(" + event + "deg)" });
        }})

        .animate({deg: 0}, {duration: 400, step: function(event) {
                $(this).css({ transform: "rotate(" + event + "deg)" });
        }});
}


//Water drops - Andras
//init water drops are hidden and randomly placed below the can
const tipOfCanX1 = 750;
const tipOfCanX2 = 800;
const tipOfCanY1 = 720;
const tipOfCanY2 = 750;

$(".waterdrop").each(function() {
    $(this).offset({top: pickRandom(tipOfCanY1, tipOfCanY2), left: pickRandom(tipOfCanX1, tipOfCanX2)});
    $(this).css("display", "none");
});

function dropMovement(movedObjectId) {
    let tilted = !($("#wateringcan").css("transform") === "matrix(1, 0, 0, 1, 0, 0)");

    if (tilted && $(movedObjectId).offset().top < $(window).height()) {
        $(movedObjectId)
            .animate({top: "+=25"}, "slow", "linear", function () {
                dropMovement(movedObjectId);
            });
    }

    if (!tilted && $(movedObjectId).offset().top < $(window).height()) {
        $(movedObjectId)
            .animate({top: "+=25"}, "slow", "linear", function () {
                dropMovement(movedObjectId);
            });
    }

    if (tilted && $(movedObjectId).offset().top > $(window).height()) {
        $(movedObjectId).offset({top: pickRandom(tipOfCanY1, tipOfCanY2), left: pickRandom(tipOfCanX1, tipOfCanX2)});
        $(movedObjectId)
            .animate({top: "+=25"}, "slow", "linear", function () {
                dropMovement(movedObjectId);
            });
    }

    if (!tilted && $(movedObjectId).offset().top > $(window).height()) {
        $(movedObjectId).offset({top: pickRandom(tipOfCanY1, tipOfCanY2), left: pickRandom(tipOfCanX1, tipOfCanX2)});
        $(movedObjectId).css("display", "none");
    }
}

//Watering can - Andras
$("#wateringcan").on("click", function() {
    let tilted = !($(this).css("transform") === "matrix(1, 0, 0, 1, 0, 0)");
    if (!tilted) {
        $(this).css("transform", "rotate(300deg)");
        $(".waterdrop").css("display", "inline");
        $(".waterdrop").each(function () {
            dropMovement(this)
        })
    }
    else {
        $(this).css("transform", "rotate(0deg)");
    }
});

//NET MOVEMENT - James
let oldX = 0;
$("body").mousemove(function (event)
{
    $("#net").css({'top': event.pageY-1, 'left': event.pageX-1});
    if (event.pageX-1 < oldX )
    {
        $("#net").attr("src", "images/net.png");
    }
    else if (event.pageX-1 > oldX)
    {
        $("#net").attr("src", "images/netinv.png");
    }
    oldX = event.pageX-1;
});

//Net swipe on click
function checkCatch() {

    let xCatch = (($("#butterfly").position().top - $("#net").position().top > 0) &&
        ($("#butterfly").position().top - $("#net").position().top <200));
    let yCatch = false;
    if ($("#net").attr("src") === "images/net.png")
        yCatch = (($("#net").position().left - $("#butterfly").position().left > 100) &&
            ($("#net").position().left - $("#butterfly").position().left < 200));
    else
        yCatch = (($("#butterfly").position().left - $("#net").position().left > 140) &&
            ($("#butterfly").position().left - $("#net").position().left < 240));

    setTimeout(function () {
        if (xCatch && yCatch) {
            $("#butterfly").stop(true);
            $("#butterfly").fadeToggle("slow", function() {
                $("#butterfly").animate({top: 0, left: 0});
                $("#butterfly").fadeToggle("slow");
                animateButterfly();
                butterflyCounter++;
                $("#score").text("Butterflies caught: " + butterflyCounter);
            });

        }
    }, 300);



    console.log(xCatch && yCatch);

    //Is the butterfly caught?
    console.log($("#net").position());
    console.log($("#butterfly").position());
}
function swipeObject(swipeObjectId) {
    let swipeSize = 60; //in degree
    if ($("#net").attr("src") === "images/net.png")
       swipeSize *= -1;
    $(swipeObjectId).animate({deg: swipeSize}, {duration: 400, step: function(event) {
        $(this).css({transform: "rotate(" + event + "deg)"});
    }});

    checkCatch();

    $(swipeObjectId).animate({deg: 0}, {duration: 600, step: function(event) {
        $(this).css({transform: "rotate(" + event + "deg)"});
    }});

}

$("#net").on("click", function() {
    swipeObject(this);
});