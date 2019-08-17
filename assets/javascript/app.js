$(document).ready(function () {




    $("#start").click(function () {
        $("#questions").toggle();
        $("#start").hide();
        clock();

    });

    $("#submit").click(function () {
        $("#doneContainer").toggle();
        $("#submit").hide();
        $("#questions").toggle();
        clearInterval(myTimer);
        $("#timer").hide();
    });
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var myTimer;



    function clock() {
        myTimer = setInterval(myClock, 1000)
        var timeLeft = 31;
        function myClock() {
            $("#timer").text(--timeLeft);
            if (timeLeft === 0) {
                clearInterval(myTimer);
                $("#doneContainer").toggle();
                $("#submit").hide();
                $("#questions").toggle();
                $("#timer").hide();
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
            }
        }
    }


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

