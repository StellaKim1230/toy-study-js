// document.getElementById("div1").addEventListener("click", () => {
//   alert("You clicked div test #1")
// }, false)

// for (let i = 0; i < 3; i++) {
//   document.getElementById("div" + i).addEventListener("click", () => {
//     alert("You clicked div #" + i)
//   }, false)
// }

// div 클릭 이벤트 let 외 다른 방법
// 즉시 실행함수로 생긴 새로운 스코프가 클릭 이벤트 핸들러의 콜백 함수의 상위에 추가되면서 문제를 해결한다.(클로저)
var i, len = 3
for (i = 0; i < len; i++) {
  document.getElementById("div" + i).addEventListener(
    "click",
    (function(index) { // 새로운 함수 스코프 3개가 만들어짐
      return () => {
        alert("You clicked div #" + index)
      }
    }(i)), // 클로저는 i
    false)
}

// var vs let 차이
// 1. var
// (1) 처럼 var로 변수 선언을 할 경우, 해당 변수는 자바스크립트 엔진이 해석할 때 함수 최상단으로 (2) 처럼 hoisting 한다.
// 동일한 변수 i가 루프를 도는 내내 계속 공유된다. for문에서 각 콜백함수를 넘길 시점에는 i 값이 달랐겠지만,
// 각 콜백함수가 실행될 시점에는 for 루프가 이미 끝나서 i가 마지막인 5로 변경된 후이다.
// 즉, var 의 변수 호이스팅과 콜백 함수의 non blocking 성질이 만난 것이다.

// (1)
for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('this number is' + i)
  }, 1000)
}

// (2)
var j
for(j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log('this number is' + j)
  }, 1000)
}

// 2. let
// let 은 변수 호이스팅을 하지 않고 블록 스코프를 가진다.
// 서로 독립된 블록 스코프를 가지며, 각 콜백 함수는 서로 다른 i 값을 출력하게 된다.
for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('this number is' + i)
  }, 1000)
}

for(var k = 0; k < 10; k++) {
  var total = (total || 0) + k
  var last = k
  if (total > 16) {
    break
  }
}
console.log(typeof total !== 'undefined')
console.log(typeof last !== 'undefined')
console.log(typeof k !== 'undefined')
console.log("total === " + total +", last === "+ last)
