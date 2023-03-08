let colours = ["red", "blue", "green", "hotpink", "cyan"];
$("#box").on("click", function() {
    let index = Math.floor(Math.random() * (5));
    $(this).css("background-color", colours[index]);
});