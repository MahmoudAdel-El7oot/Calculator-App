var clearAll = document.getElementById("cl");
var del = document.getElementById("del");
var div = document.getElementById("div");
var mult = document.getElementById("mult");
var sub = document.getElementById("sub");
var sum = document.getElementById("sum");
var zero = document.getElementById("zero");
var num_1 = document.getElementById("num_1");
var num_2 = document.getElementById("num_2");
var num_3 = document.getElementById("num_3");
var num_4 = document.getElementById("num_4");
var num_5 = document.getElementById("num_5");
var num_6 = document.getElementById("num_6");
var num_7 = document.getElementById("num_7");
var num_8 = document.getElementById("num_8");
var num_9 = document.getElementById("num_9");
var eq = document.getElementById("eq");
var remainder = document.getElementById("remainder")
var dott = document.getElementById("dott")
var dbZero = document.getElementById("dbZero");
var value = document.getElementById("value")
var buttons = document.getElementsByClassName("button");
var histortBtn = document.getElementById("history");
var displayHistory = document.getElementById("displayHistory");
var container = document.getElementById("container");
var allData = [];
var historyValue = [];

num_1.addEventListener("click", function (e) {
    displayNumber(e);
})

num_2.addEventListener("click", function (e) {
    displayNumber(e);
})

num_3.addEventListener("click", function (e) {
    displayNumber(e);
})

num_4.addEventListener("click", function (e) {
    displayNumber(e);
})

num_5.addEventListener("click", function (e) {
    displayNumber(e);
})

num_6.addEventListener("click", function (e) {
    displayNumber(e)
})

num_7.addEventListener("click", function (e) {
    displayNumber(e);
})

num_8.addEventListener("click", function (e) {
    displayNumber(e);
})

num_9.addEventListener("click", function (e) {
    displayNumber(e);
})

sum.addEventListener("click", function (e) {
    storeNumber();
    if (value.innerHTML != "+") {
        displayOperator(e);
        storeOperator();
    }
    div.style = "background-color: #fff;";
    mult.style = "background-color: #fff;";
    sub.style = "background-color: #fff;";
    remainder.style = "background-color: #fff;";
})

sub.addEventListener("click", function (e) {
    storeNumber();
    if (value.innerHTML != "+") {
        displayOperator(e);
        storeOperator();
    }
    div.style = "background-color: #fff;";
    mult.style = "background-color: #fff;";
    sum.style = "background-color: #fff;";
})

mult.addEventListener("click", function (e) {
    storeNumber();
    if (value.innerHTML != "+") {
        displayOperator(e);
        storeOperator();
    }
    div.style = "background-color: #fff;";
    sub.style = "background-color: #fff;";
    sum.style = "background-color: #fff;";
    remainder.style = "background-color: #fff;";
})

div.addEventListener("click", function (e) {
    storeNumber();
    if (value.innerHTML != "+") {
        displayOperator(e);
        storeOperator();
    }
    sub.style = "background-color: #fff;";
    mult.style = "background-color: #fff;";
    sum.style = "background-color: #fff;";
    remainder.style = "background-color: #fff;";
})

remainder.addEventListener("click", function (e) {
    storeNumber();
    if (value.innerHTML != "+") {
        displayOperator(e);
        storeOperator();
    }
    div.style = "background-color: #fff;";
    mult.style = "background-color: #fff;";
    sum.style = "background-color: #fff;";
    sub.style = "background-color: #fff;";
})

zero.addEventListener("click", function (e) {
    displayNumber(e)
})

dbZero.addEventListener("click", function (e) {
    displayNumber(e)
})

dott.addEventListener("click", function (e) {
    var btnValue = e.target.innerHTML
    if (value.innerHTML == "syntax Error" || value.innerHTML == "+" || value.innerHTML == "-" || value.innerHTML == "*" || value.innerHTML == "/" || value.innerHTML == "%") {
        value.innerHTML = btnValue;
    } else if (value.innerHTML.includes(".")) {
        value.innerHTML = "syntax Error"

    } else {
        value.innerHTML += btnValue;
    }
})

clearAll.addEventListener("click", function (e) {
    allData = [];
    value.innerHTML = "0"
    retreievOreginalStyle();
})

del.addEventListener("click", function (e) {
    if (value.innerHTML != "0") {
        deleteLastNumber()
        if (value.innerHTML == "") {
            value.innerHTML = "0"
        }
    }
})

eq.addEventListener("click", function (e) {
    e.target.style = "background-color: green;"
    div.style = "background-color: #fff;";
    mult.style = "background-color: #fff;";
    sub.style = "background-color: #fff;";
    sum.style = "background-color: #fff;";
    remainder.style = "background-color: #fff;";
    storeNumber();
    localStorage.setItem("allValue", JSON.stringify(allData))
    searchOperator();
})

function deleteLastNumber() {
    if (value.innerHTML == "syntax Error" || value.innerHTML == "NaN") {
        value.innerHTML = "";
        eq.style = "background-color:#fff"
    }
    var displayValue = value.innerHTML;
    var lengthValue = value.innerHTML.length;
    value.innerHTML = displayValue.substring(0, lengthValue - 1)
}

function displayNumber(e) {
    var btnValue = e.target.innerHTML
    if (value.innerHTML == "0" || value.innerHTML == "+" || value.innerHTML == "-" || value.innerHTML == "*" || value.innerHTML == "/" || value.innerHTML == "%" || value.innerHTML == "syntax Error" || value.innerHTML == "NaN") {
        value.innerHTML = btnValue;
    } else {
        value.innerHTML += btnValue;
    }
}

function displayOperator(e) {
    var btnValue = e.target.innerHTML
    value.innerHTML = btnValue;
    e.target.style = "background-color: gray;"

}

function retreievOreginalStyle() {
    div.style = "background-color: #fff;";
    mult.style = "background-color: #fff;";
    sub.style = "background-color: #fff;";
    sum.style = "background-color: #fff;";
    remainder.style = "background-color: #fff;";
    eq.style = "background-color: #fff;";
}

function storeNumber() {
    if (value.innerHTML == "+" || value.innerHTML == "-" || value.innerHTML == "*" || value.innerHTML == "/" || value.innerHTML == "%") {

    } else {
        var number = value.innerHTML;
        allData.push(number)
    }
}

function storeOperator() {
    var mathematicalOperator = value.innerHTML;
    allData.push(mathematicalOperator)
}

function searchOperator() {
    if (allData.includes("*") || allData.includes("/")) {
        if ((allData.indexOf("*") < allData.indexOf("/") && allData.indexOf("/") != -1 && allData.indexOf("*") != -1) || allData.indexOf("/") == -1) {

            var indexOperator = allData.indexOf("*");
            var num1 = allData[indexOperator - 1];
            var num2 = allData[indexOperator + 1];
            allData.splice(indexOperator - 1, 3, calcMult(num1, num2));
            checkArrayValue();
        } else {
            console.log("/")
            var indexOperator = allData.indexOf("/");
            var num1 = allData[indexOperator - 1];
            var num2 = allData[indexOperator + 1];
            allData.splice(indexOperator - 1, 3, calcDiv(num1, num2));
            checkArrayValue();
        }

    } else if (allData.includes("+") || allData.includes("-")) {
        if ((allData.indexOf("+") < allData.indexOf("-") && allData.indexOf("-") != -1 && allData.indexOf("+") != -1) || allData.indexOf("-") == -1) {

            var indexOperator = allData.indexOf("+");
            var num1 = allData[indexOperator - 1];
            var num2 = allData[indexOperator + 1];
            allData.splice(indexOperator - 1, 3, calcSum(num1, num2));
            checkArrayValue();
        } else {
            console.log("-")
            var indexOperator = allData.indexOf("-");
            var num1 = allData[indexOperator - 1];
            var num2 = allData[indexOperator + 1];
            allData.splice(indexOperator - 1, 3, calcSub(num1, num2));
            checkArrayValue();
        }

    } else {
        var indexOperator = allData.indexOf("%");
        var num1 = allData[indexOperator - 1];
        var num2 = allData[indexOperator + 1];
        allData.splice(indexOperator - 1, 3, calcRem(num1, num2));
        checkArrayValue();
    }
}


function checkArrayValue() {
    if (allData.length == 1) {
        value.innerHTML = allData[0];
        localStorage.setItem("result", allData[0])
    }
    else {
        searchOperator();
    }

}

function calcSum(num1, num2) {
    var addition = Number(num1) + Number(num2);
    return addition;
}

function calcSub(num1, num2) {
    var subtraction = Number(num1) - Number(num2);
    return subtraction
}

function calcMult(num1, num2) {
    var multiplication = Number(num1) * Number(num2);
    return multiplication
}

function calcDiv(num1, num2) {
    var division = Number(num1) / Number(num2);
    return division
}

function calcRem(num1, num2) {
    var remainder = Number(num1) % Number(num2);
    return remainder
}

histortBtn.addEventListener("click", function (e) {
    displayHistory.style = "display: flex;"
    container.style = "height: 570px;"
    historyValue = JSON.parse(localStorage.getItem("allValue"));
    var values = "";
    var result = localStorage.getItem("result");
    if (historyValue == null) {
        displayHistory.innerHTML = "clear history";
    } else {
        for (i = 0; i < historyValue.length; i++) {
            values += ` ${historyValue[i]} `
        }
        displayHistory.innerHTML = `${values} = ${result}`;
    }
})

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        displayHistory.style = "display: none;"
        container.style = "height: 500px;"
    })
}

