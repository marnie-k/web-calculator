function calculate() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value
    var calculate;

    if( operator == "plus"){
        calculate = a + b;}
    
        else if (operator == 'minus'){
        calculate = a - b}
    
        else if (operator == 'multiplied by'){
        calculate = a * b}

        else if (operator == 'divided by'){
        calculate = a / b}

 console.log(calculate)
    document.getElementById("results").innerHTML = calculate;
    }
        