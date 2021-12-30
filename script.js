var field1=document.getElementById("num1").value;
var field2=document.getElementById("num2").value;
var result;
var result2;

function calculate() {

        var result = parseInt(field1) * 0.621371192;
        document.getElementById("answer").innerHTML = field1 + " Km is " + Math.round(result) + " Miles";
  
}


function calculateMiles() {

    var result2 = parseInt(field2) / 0.621371192;
    document.getElementById("answer2").innerHTML = field2 + " Miles is " + Math.round(result2) + " Km";

}




function both() {
    calculate();
    calculateMiles();
}


