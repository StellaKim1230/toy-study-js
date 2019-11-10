String.prototype.reverse = function() {
  return this.split("")
    .reverse()
    .join("")
}

function reverseString(str) {
  var newString = ""
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}

console.log("abcdfer".reverse())
console.log(reverseString("abcdfer"))
