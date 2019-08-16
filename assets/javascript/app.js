$(document).ready(function () {




    $("#start").click(function () {
        $("#questions").toggle();
        $("#start").hide();
    });

    $("#submit").click(function () {
        $("#doneContainer").toggle();
        $("#submit").hide();
        $("#questions").toggle();
    });
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;


    $("#submit").click(function () {
        

        var radioValue = $("input[name='q1']:checked").val();
        if  (radioValue != "male"){
            incorrect++;
        }
        else if (radioValue === "male") {
            correct++;
         }
         else  {
            unanswered++;
            
        }  
        

        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
        $("#unanswered").text("Unanswered: " + unanswered);
    });

});

