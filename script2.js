function calculate()
{
  var a = document.getElementById("a").value
  var b = document.getElementById("b").value
  var operator = document.getElementById("operator")

  var op = operator.options[operator.selectedIndex].value

    if(op === "add") {
      var answer = parseInt(a) + parseInt(b)
    } 
    else if(op === "subtract") {
      var answer = parseInt(a) - parseInt(b)
    } 
    else if(op === "multiply") {
      var answer = parseInt(a) * parseInt(b)
    } 
    else if(op === "divide") {
      var answer = parseInt(a) / parseInt(b)
}

document.getElementById("answer").innerHTML = answer

}