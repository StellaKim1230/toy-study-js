// var countFactory = (function() {
//   var staticCount = 0
//   return function() {
//     var localCount = 0
//     return {
//       increase: function () {
//         return {
//           static: ++staticCount,
//           local: ++localCount
//         }
//       },
//       decrease: function() {
//         return {
//           static: --staticCount,
//           local: --localCount
//         }
//       }
//     }
//   }
// }())

// var counter = countFactory(), counter2 = countFactory()

// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter2.decrease())
// console.log(counter.increase())

(function () {
  var appenDiv = document.getElementById("appendDiv")
  document.getElementById("wrapper").addEventListener("click", append)

  function append(e) {
    var target = e.target || e.srcElement || event.srcElement
    var callbackFunction = callback[target.getAttribute("data-cb")]
    appenDiv.appendChild(callbackFunction())
  }

  var callback = {
    "1": (function() {
      var div = document.createElement("div")
      div.innerHTML = "Adding new Div"
      return function() {
        return div.cloneNode(true)
      }
    }()),
    "2": (function() {
      var img = document.createElement("img")
      img.src = "http://cfile9.uf.tistory.com/image/011F554E50FD140F2B27CA"
      return function () {
        return img.cloneNode(true)
      }
    }()),
    "delete":function() {
      appendDiv.innerHTML = ""
      return document.createTextNode("Cleared")
    }
  }
}())

// * 반복적으로 같은 작업을 할 때, 같은 초기화 작업이 지속적으로 필요할 때, 콜백 함수에 동적인 데이터를 넘겨주고 싶을 때 클로저를 사용하자.
