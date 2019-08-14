$("#start").click(function () {
    $("#questions").toggle();
    $("#start").hide();
});

$("#submit").click(function () {
    $("#doneContainer").toggle();
    $("#submit").hide();
    $("#questions").toggle();
});



