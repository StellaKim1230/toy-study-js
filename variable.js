function addOneToTen() {
  sum = 0;
  for (i = 0; i < 11; i++) {
    sum = sum + i;
  }
  return sum
}

sum = 0
for ( i = 0; i < 10; i++) {
  sum = sum + addOneToTen()
}

var getVariable = "global"

(function() {
  var getVariable = "immediate function"

  insideFunction()

  console.log("2. Immediate function: " + getVariable)

  function insideFunction() {
    console.log("1. Inside FUnction: " + getVariable)
    getVariable = "will I be global?"
  }
}())

console.log("3. Global: " + getVariable)
