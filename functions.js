// TODO: If display is 0, and result is 0, overright display zero with next number input
//        or otherwise remove trailing zero on left of string.

// TODO: implement equals/result functionality + tie in to equals button

// TODO: implement minus functionality + tie in to minus button

// TODO: implement multiply functionality + tie in to multiply button

// TODO: implement divide functionality + tie in to divide button

// TODO: clear screen when pressing operator button

// TODO: clear screen when pressing number button IF operator button has been pressed

// TODO: if sum-string-display is unpopulated, do not populate it (i.e. when entering first number)

// TODO: if value entry == 9, disallow further entry + warn user

// TODO: if overall entries == 16, disallow further entry + warn user

// TODO: do not allow multiples of one real-world operation at a time (e.g. ++, --, /+, *+, etc.).



// global variables
// var displayValue = 0.0;
// var currentValue = 0.0;
var heldValue = 0;
var result;
var operator = "";
var operatorCheck = false;


// updates variable and screen values to value of number button pressed
function returnNumber(num) {

    var thisNum = num;
    document.getElementById('screen').style.textAlign = "right";
    document.getElementById('screen').value += num;

    if (operatorCheck == true) {

        switch (operator) {

            case "+":
                document.getElementById('sum-string-display').innerHTML += thisNum;
                heldValue += num;
                operatorCheck = false; 
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
            default:
                break;
    
        }

    } else {

        document.getElementById('sum-string-display').innerHTML += thisNum.toString()
        
        ;
        result += num;
        operatorCheck = false;

    }

};

// used by math operator buttons to set the operator variable
function setOperator (op) {

    operator = op;
    document.getElementById('screen').value = "";
    document.getElementById('sum-string-display').innerHTML += operator;
    document.getElementById('testP').innerHTML += operator;

}

// wipe set variable and screen values to 0
function clearAll() {

    displayValue = 0.0;
    currentValue = 0.0;
    document.getElementById('screen').value = displayValue;
    document.getElementById('sum-string-display').innerHTML = "";
}

function equals() {

    result = heldValue;
    document.getElementById('screen').value = result;
    document.getElementById('sum-string-display').innerHTML = "";
    document.getElementById('screen').style.textAlign = "left";
    document.getElementById('screen').style.fontWeight = "bold";

}
