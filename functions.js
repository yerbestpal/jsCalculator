// TODO: if sum-string-display is unpopulated, do not populate it (i.e. when entering first number)

// TODO: do not allow multiples of one real-world operation at a time (e.g. ++, --, /+, *+, etc.)

// TODO: incorporate BODMAS so the calculations are ACTUALLY CORRECT


// global variables
var numString = ""; // used to build string to be converted to float and stored in oldValue
var oldValue = 0.0;
var newValue = 0.0;
var result = 0.0;
var plusCheck, minusCheck, multiplyCheck, divideCheck = false;
var operator = "";


// updates variable and screen values to value of number button pressed
function returnNumber(num) {

    if (document.getElementById('screen').value.length <= 9) {

        if (numString == "") document.getElementById('screen').value = null;
        document.getElementById('screen').value += num;
        document.getElementById('screen').style.textAlign = "right";
        document.getElementById('sum-string-display').innerHTML += num;
        numString += num;

        console.log("numString: " + numString);
        console.log("oldValue: " + oldValue);

        if (plusCheck) {

            result = oldValue + Number(numString);
    
        } else if (minusCheck) {
    
            result = oldValue - Number(numString);
    
        } else if (multiplyCheck) {
    
            result = oldValue * Number(numString);
    
        } else if (divideCheck) {
    
            result = oldValue / Number(numString);
    
        }

    } else {

        console.log("There is a number limit.");

    }

};

// used by math operator buttons to set the operator variable
function setOperator (op) {

    operatorCheck = true;
    document.getElementById('screen').value = "";
    document.getElementById('sum-string-display').innerHTML += op;
    console.log(op);

    switch (op) {

        case "+":
            newValue += Number(numString);
            oldValue += newValue;
            numString = "";
            operator = '+';
            plusCheck = true;
            break;
        case "-":

            if (!oldValue > 0) {

                newValue += Number(numString);
                oldValue += newValue;

            } 
            numString = "";
            operator = '-';
            minusCheck = true;
            break;
        case "*":
            if (!oldValue > 0) oldValue += Number(numString);
            numString = "";
            operator = '*';
            multiplyCheck = true;
            break;
        case "/":
            if (!oldValue > 0) oldValue += Number(numString);
            numString = "";
            operator = '/';
            multiplyCheck = true;
            break;

    }

}

// wipe set variable and screen values to 0
function clearAll() {

    numString = "";
    oldValue = 0.0; 
    result = 0.0;
    operatorCheck = false;
    document.getElementById('screen').style.textAlign = "right";
    document.getElementById('screen').value = oldValue;
    document.getElementById('sum-string-display').innerHTML = "";
    console.log("Clear All");
}

// calculates final answer
function equals() {

    plusCheck, minusCheck, multiplyCheck, divideCheck = false;
    document.getElementById('screen').value = result;
    document.getElementById('sum-string-display').innerHTML = "";
    document.getElementById('screen').style.textAlign = "left";

    oldValue = result;
    numString = "";
    console.log("---------------------------");
    console.log("result: " + result);
    console.log("numString: " + numString);
    console.log("oldValue: " + oldValue);
    console.log("---------------------------");

}

document.addEventListener("keydown", function (event) {

    switch (event.key) {
        case  "1":
            returnNumber(1);
            // var numAudio = new Audio("assets/audio/number.wav");
            // numAudio.play();
            break;
        case "2":
            returnNumber(2);
            break;
        case "3":
            returnNumber(3);
            break;
        case "4":
            returnNumber(4);
            break;
        case "5":
            returnNumber(5);
            break;
        case "6":
            returnNumber(6);
            break;
        case "7":
            returnNumber(7);
            break;
        case "8":
            returnNumber(8);
            break;
        case "9":
            returnNumber(9);
            break;
        case "0":
            returnNumber(0);
            break;
        case "=": // using = for addition so user does not need a key combination
            setOperator('+');
            break;
        case "-":
            setOperator('-');
            break;
        case "x": 
            setOperator('*');
            break;
        case "/": 
            setOperator('/');
            break;
        case "Enter":
            equals();
            break;
        case "c":
            clearAll();
            break;
        default:
            console.log("That key is not a number or operator!");
            break;
    }   

});
