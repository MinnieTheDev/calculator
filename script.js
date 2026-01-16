function add(a,b) {
	return a + b
};

function subtract(a,b) {
	return a - b
};

function divide(a,b) {
    console.log(a,b)
    if (b == 0) {
        updateDisplay("No dividing by 0!", true);
        return false;
    }
	return a/b;
};

function multiply(a,b) {
  return a * b;
};

let num1 = '';
let operator = '';
let num2 = '';
let res = 0;

function operate(num1, num2, op) {
    return window[op](parseInt(num1), parseInt(num2));
}

let currDisplay = document.querySelector(".display")

function updateDisplay(input, error= false) {
    if (error) {
        currDisplay.textContent = input;
    }
    // calculation finished / just started
    else if (num1 == "" && num2 == "" && operator == "") {
        // currDisplay.textContent = null
        currDisplay.textContent = input
    }
    // no operator inputted yet, we're still continuing the expression display
    else if (num1){
        currDisplay.textContent += input
    }
}

// Update num1 & num2 variables
function updateVars(num) {
    updateDisplay(num)
    if (operator == "" || (operator && num1 == "")) {
        num1 += num
    }
    else {
        num2 += num;
    }    
}

// Handle digits' inputs/clicks
const digits = document.querySelectorAll(".digits .number");

digits.forEach(digit => {
    let currDigit = digit.title;

    let registerNumWrapper = (event) => {
        updateVars(currDigit);
    };

    digit.addEventListener("click", registerNumWrapper);
});

// handle operator clicking
const operators = document.querySelectorAll(".operator button");

operators.forEach(currOp => {

    currOp.addEventListener("click", () => {
        if (num1 && num2) {
            num1 = operate(num1, num2, operator);
            num2 = '';
        }
        operator = currOp.id;
        updateDisplay(currOp.textContent);
    })
    
})
// handle equal clicking
const equal = document.querySelector(".nondigits button#equal")

equal.addEventListener("click", () => {
    res = operate(num1, num2, operator);
    if (res) {
        updateDisplay(res);
    }
    resetVariables();
})

// handle clear
function resetVariables() {
    num1 = "";
    num2 = "";
    operator = "";
}

const clear = document.querySelector(".digits .clear");

clear.addEventListener("click", () => {
    resetVariables();
    updateDisplay(num1);
});