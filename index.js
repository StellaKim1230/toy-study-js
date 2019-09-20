// var divs = document.querySelectorAll("div");

// divs.forEach(function(div) {
//   div.addEventListener("click", logEvent, {
//     capture: true
//   });
// });

// function logEvent(event) {
//   event.stopPropagation();
//   console.log(event.currentTarget.className);
// }

// var itemList = document.querySelector(".itemList");

// inputs.forEach(function(input) {
// itemList.addEventListener("click", function(event) {
//   alert("clicked");
// });
// });

// var itemList = document.querySelector(".itemList");
// var li = document.createElement("li");
// var input = document.createElement("input");
// var label = document.createElement("label");
// var labelText = document.createTextNode("이벤트 위임 학습");

// input.setAttribute("type", "checkbox");
// input.setAttribute("id", "item3");
// label.setAttribute("for", "item3");
// label.appendChild(labelText);
// li.appendChild(input);
// li.appendChild(label);
// itemList.appendChild(li);

// prototype reverse
// String.prototype.reverse = function() {
//   return this.split("")
//     .reverse()
//     .join("");
// };

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//     newString += str[i];
//   }
//   return newString;
// }

// console.log(reverseString("abcdfer"));

// function factorial(num) {
//   if (num === 1) return 1;

//   return num * factorial(num - 1);
// }
// console.log(factorial(5));

Function.prototype.customBind = function(oThis) {
  if (typeof this !== "function") {
    // ECMAScript 5 내부 IsCallable 함수와
    // 가능한 가장 가까운 것
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function() {},
    fBound = function() {
      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

  if (this.prototype) {
    // Function.prototype은 prototype 속성이 없음
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new fNOP();

  return fBound;
};

var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

var unboundGetX = module.getX;
console.log(unboundGetX());

var boundGetX = unboundGetX.customBind(module);
console.log(boundGetX());
