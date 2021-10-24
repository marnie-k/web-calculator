function calculate(){

  var a = document.getElementById("a").value
  var b = document.getElementById("b").value
  
  var operator = document.getElementById(operator)
  var op = operator.options[operator.selectedIndex].value

  var answer = parseInt(a) + parseInt(b)
  
  document.getElementById("answer").innerHTML = answer




}
