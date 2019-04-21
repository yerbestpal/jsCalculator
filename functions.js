// TODO: if sum-string-display is unpopulated, do not populate it (i.e. when entering first number)

// TODO: do not allow multiples of one real-world operation at a time (e.g. ++, --, /+, *+, etc.)

// TODO: incorporate BODMAS so the calculations are ACTUALLY CORRECT


// global variables
var numString = ""; // used to build string to be converted to float and stored in heldValue
var heldValue = 0.0;
var result = 0.0;
var operatorCheck = false; // checks if operator has been pressed.


// updates variable and screen values to value of number button pressed
function returnNumber(num) {

    if (document.getElementById('screen').value.length <= 9) {

        var thisNum = num;
        if (numString == "") document.getElementById('screen').value = null;
        document.getElementById('screen').value += num;
        document.getElementById('screen').style.textAlign = "right";
        document.getElementById('sum-string-display').innerHTML += thisNum;
        numString += thisNum; 
        operatorCheck = false;
        console.log("numString: " + numString);

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
            heldValue += Number(numString);  
            numString = "";
            break;
        case "-":
            heldValue -= Number(numString);  
            numString = ""; 
            break;
        case "*":
            heldValue *= Number(numString);  
            numString = ""; 
            break;
        case "/":
            heldValue /= Number(numString);  
            numString = "";
            break;

    }

}

// wipe set variable and screen values to 0
function clearAll() {

    numString = "";
    heldValue = 0.0;
    result = 0.0;
    operatorCheck = false;
    document.getElementById('screen').style.textAlign = "right";
    document.getElementById('screen').value = heldValue;
    document.getElementById('sum-string-display').innerHTML = "";
    console.log("Clear All");
}

// calculates final answer
function equals() {

    if (numString != "" || numString > 0) {

        heldValue += Number(numString);
        numString = "";

    }

    result = heldValue;
    operatorCheck = false;
    document.getElementById('screen').value = result;
    document.getElementById('sum-string-display').innerHTML = "";
    document.getElementById('screen').style.textAlign = "left";
    console.log("result: " + result);

}

document.addEventListener("keydown", function (event) {

    switch (event.key) {
        case  "1":
            returnNumber(1);
            // var numAudio = new Audio("assets/audio/number.wav");
            numAudio.play();
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
