// global variables
var stringBuilder = ""; // used to build string to be converted to float and stored in oldValue
var num1 = 0.0;
var num2 = 0.0;
var result = 0.0;
// var plusCheck, minusCheck, multiplyCheck, divideCheck = false;


// jQuery container
$(document).ready(function() {


    // number click
    $('.number').on('click', 'keydown', function(key) {
        var i = key.which;
        console.log(i);
        var targetId = event.srcElement.value; // gets value of number pressed
        $('.screen').get(0).value += targetId; // sends number to screen
        stringBuilder += targetId; // sends number to stringbuilder
        myLogs();

        // if (!plusCheck) {
        //     num2 += parseInt(stringBuilder);
        //     myLogs();
        // } else {
        //     num1 += num2;
        //     num2 = 0.0;
        //     num2 += parseInt(stringBuilder);
        //     plusCheck, minusCheck, multiplyCheck, divideCheck = false;
        // }

    });


    // operator click
    $('.operator').on('click', function() {
        var targetId = event.srcElement.value;
        num2 += parseInt(stringBuilder);
        stringBuilder = "";
        switch (targetId) {
            case "+":
                num1 += num2;
                console.log(targetId);
                myLogs();
                break;
            case "-":
                minusCheck = true;
                console.log(targetId);
                break;
            case "*":
                multiplyCheck = true;
                console.log(targetId);
                break;
            case "/":
                divideCheck = true;
                console.log(targetId);
                break;
        }
    });


    // equals click
    $('.equals').on('click', 'keypress', function() {
        var targetId = event.srcElement.value;
        console.log(targetId);
        if (num2 > 0.0) {
            switch (targetId) {
                case "+":
                    num1 += num2;
                    myLogs();
                    break;
                case "-":
                    minusCheck = true;
                    console.log(targetId);
                    break;
                case "*":
                    multiplyCheck = true;
                    console.log(targetId);
                    break;
                case "/":
                    divideCheck = true;
                    console.log(targetId);
                    break;
            }
        }
        console.log("Result: " + num1);
    });


    // all-clear click
    $('.all-clear').on('click', function() {
        $('.screen').get(0).value = 0;
        stringBuilder = "";
        num1 = 0.0;
        num2 = 0.0;
        myLogs();
    });

});


function myLogs() {
    console.log("num2: " + num2);
    console.log("num1: " + num1);
    console.log("stringbuilder: " + stringBuilder);;
}