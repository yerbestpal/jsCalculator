// global variables
var stringBuilder = ""; // used to build string to be converted to float and stored in oldValue
var num1 = 0.0;
var num2 = 0.0;
var result = 0.0;
var plusCheck, minusCheck, multiplyCheck, divideCheck = false;

$(document).ready(function() {
    $('.number').on('click', function() {
        var targetId = event.srcElement.value;
        $('.screen').get(0).value += targetId;
        stringBuilder += targetId;
        console.log("stringbuilder: " + stringBuilder);

        if (!plusCheck) {
            num2 += parseInt(stringBuilder);
        } else {
            num1 += num2;
            num2 = 0.0;
            num2 += parseInt(stringBuilder);
            plusCheck, minusCheck, multiplyCheck, divideCheck = false;
        }

    });

    $('.all-clear').on('click', function() {
        $('.screen').get(0).value = 0;
        stringBuilder = "";
        console.log("stringbuilder: " + stringBuilder);
    });

    $('.operator').on('click', function() {
        var targetId = event.srcElement.value;
        switch (targetId) {
            case "+":
                plusCheck = true;
                break;
            case "-":
                minusCheck = true;
                break;
            case "*":
                multiplyCheck = true;
                break;
            case "/":
                divideCheck = true;
                break;
        }
    });
});