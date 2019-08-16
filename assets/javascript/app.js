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
        if (radioValue === "male") {
            correct++;
         }
        else if (radioValue != "male") {
            incorrect++;
        }
        
        if (!$("input[name='q1']:checked").val()) {
            unanswered++;
            incorrect--;
        }
        
        var radioValue2 = $("input[name='q2']:checked").val();
        if (radioValue2 === "male") {
            correct++;
         }
        else if (radioValue2 != "male") {
            incorrect++;
        }
        
        if (!$("input[name='q2']:checked").val()) {
            unanswered++;
            incorrect--;
        }

        var radioValue3 = $("input[name='q3']:checked").val();
        if (radioValue3 === "male") {
            correct++;
         }
        else if (radioValue3 != "male") {
            incorrect++;
        }
        
        if (!$("input[name='q3']:checked").val()) {
            unanswered++;
            incorrect--;
        }

        var radioValue4 = $("input[name='q4']:checked").val();
        if (radioValue4 === "male") {
            correct++;
         }
        else if (radioValue4 != "male") {
            incorrect++;
        }
        
        if (!$("input[name='q4']:checked").val()) {
            unanswered++;
            incorrect--;
        }

        var radioValue5 = $("input[name='q5']:checked").val();
        if (radioValue5 === "male") {
            correct++;
         }
        else if (radioValue5 != "male") {
            incorrect++;
        }
        
        if (!$("input[name='q5']:checked").val()) {
            unanswered++;
            incorrect--;
        }
        

        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
        $("#unanswered").text("Unanswered: " + unanswered);
    });

});

