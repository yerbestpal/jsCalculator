// TODO: If display is 0, and result is 0, overright display zero with next number input
//        or otherwise remove trailing zero on left of string.

// TODO: if sum-string-display is unpopulated, do not populate it (i.e. when entering first number)

// TODO: if value entry == 9, disallow further entry + warn user

// TODO: if overall entries == 16, disallow further entry + warn user

// TODO: do not allow multiples of one real-world operation at a time (e.g. ++, --, /+, *+, etc.)

// TODO: incorporate BODMAS so the calculations are ACTUALLY CORRECT

// TODO:  implement keyboard button functionality



// global variables
// var displayValue = 0.0;
// var currentValue = 0.0;
var heldValue = 0.0;
var result = 0.0;
var operator = "";
var operatorCheck = false;


// updates variable and screen values to value of number button pressed
function returnNumber(num) {

    var thisNum = num;
    document.getElementById('screen').style.textAlign = "right";
    if (heldValue == 0) document.getElementById('screen').value = "";
    document.getElementById('screen').value += num;

    if (operatorCheck == true) {

        switch (operator) {

            case "+":
                document.getElementById('sum-string-display').innerHTML += thisNum;
                heldValue += num;
                operatorCheck = false; 
                break;
            case "-":
                document.getElementById('sum-string-display').innerHTML += thisNum;
                heldValue -= num;
                operatorCheck = false; 
                break;
            case "*":
                document.getElementById('sum-string-display').innerHTML += thisNum;
                heldValue *= num;
                operatorCheck = false; 
                break;
            case "/":
                document.getElementById('sum-string-display').innerHTML += thisNum;
                heldValue /= num;
                operatorCheck = false; 
                break;
    
        }

    } else {

        document.getElementById('sum-string-display').innerHTML += thisNum.toString();
        heldValue += num;
        operatorCheck = false;

    }

};

// used by math operator buttons to set the operator variable
function setOperator (op) {

    operator = op;
    operatorCheck = true;
    document.getElementById('screen').value = "";
    document.getElementById('sum-string-display').innerHTML += operator;

}

// wipe set variable and screen values to 0
function clearAll() {

    heldValue = 0.0;
    result = 0.0;
    operatorCheck = false;
    document.getElementById('screen').style.textAlign = "right";
    document.getElementById('screen').value = heldValue;
    document.getElementById('sum-string-display').innerHTML = "";
}

// calculates final answer
function equals() {

    result = heldValue;
    operatorCheck = false;
    document.getElementById('screen').value = result;
    document.getElementById('sum-string-display').innerHTML = "";
    document.getElementById('screen').style.textAlign = "left";
    Document.getElementById('result_test').innerHTML += result;

}
