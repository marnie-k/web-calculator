function calculate(){

  var a = document.getElementById("a").value
  var b = document.getElementById("b").value
  
  var operator = document.getElementById(operator)
  var op = operator.options[operator.selectedIndex].value
  document.getElementById("answer").innerHTML = answer
    if(operator === "add") {
      var answer = parseInt(a) + parseInt(b)
    } else
    if(operator === "subtract") {
      var answer = parseInt(a) - parseInt(b)
    } else 
    if(operator === "multiply") {
      var answer = parseInt(a) * parseInt(b)
    } else    
    if(operator === "divide") {
      var answer = parseInt(a) / parseInt(b)
}
}