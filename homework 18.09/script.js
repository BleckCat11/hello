const colors = [0, 0, 0]

let counter = 0

function1();
function function1() {
  window.addEventListener(
    "keydown",
    function (e) {
      let one = 0;
      let two = 0;
      let three = 0;
      if (e.key == "Shift") {
        colors[0] = 125;
      }
      if (e.key == "CapsLock") {
        colors[1] = 125;
      }
      if (e.key == "A") {
        colors[2] = 125;
      }
      document.body.style.backgroundColor =
        "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
    },
    false
  );
  window.addEventListener(
    "keyup",
    function (e) {
      let one = 0;
      let two = 0;
      let three = 0;
      if (e.key == "Shift") {
        colors[0] = 0;
      }
      if (e.key == "CapsLock") {
        colors[1] = 0;
      }
      if (e.key == "A") {
        colors[2] = 0;
      }
      document.body.style.backgroundColor =
        "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
    },
    false
  );
}
function2();
function function2() {
  let input1 = document.getElementById("input1");
  input1.addEventListener(
    "keyup",
    function (e) {
      let i = document.getElementById("input1").value;
      div1.style.height = i + "px";
      console.log(i + "px");
    },
    false
  );
  input1.addEventListener(
    "keypress",
    function (e) {
      let i = document.getElementById("input1").value;
      div1.style.height = i + "px";
      console.log(i + "px");
    },
    false
  );
}
function3();
function function3() {
  window.addEventListener(
    "keydown",
    function (e) {
      if (e.key == "ArrowDown") {
        let bottom = document.getElementById("div4").style.top;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result + 10;
        document.getElementById("div4").style.top = result10 + "px";
      } else if (e.key == "ArrowUp") {
        let bottom = document.getElementById("div4").style.top;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result - 10;
        document.getElementById("div4").style.top = result10 + "px";
      } else if (e.key == "ArrowLeft") {
        let bottom = document.getElementById("div4").style.left;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result - 10;
        document.getElementById("div4").style.left = result10 + "px";
      } else if (e.key == "ArrowRight") {
        let bottom = document.getElementById("div4").style.left;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result + 10;
        document.getElementById("div4").style.left = result10 + "px";
      }
    },
    false
  );
}

function31();
function function31() {
  window.addEventListener(
    "keydown",
    function (e) {
      if (e.key == "s") {
        let bottom = document.getElementById("div5").style.top;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result + 10;
        document.getElementById("div5").style.top = result10 + "px";
      } else if (e.key == "w") {
        let bottom = document.getElementById("div5").style.top;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result - 10;
        document.getElementById("div5").style.top = result10 + "px";
      } else if (e.key == "a") {
        let bottom = document.getElementById("div5").style.left;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result - 10;
        document.getElementById("div5").style.left = result10 + "px";
      } else if (e.key == "d") {
        let bottom = document.getElementById("div5").style.left;
        let result = bottom.substring(0, bottom.length - 2);
        let result10 = +result + 10;
        document.getElementById("div5").style.left = result10 + "px";
      }
    },
    false
  );
}

function function4() {
  let i;
  do {
    i = prompt();
    let number = +i;
    console.log(i)
    console.log(number)
  } while (i != 'q')

  let counter = 0;
  // i.addEventListener("keydown", function (e) {
  //   if (e.key == "q") {
  //     alert(counter);
  //   } else {
  //     let y = prompt;
  //     counter = counter + y;
  //   }
  // });
}




//Методи масивів

//push - додати елемент в масив в кінець
//unshift - додати елемент в масив в початок
//pop - відрізає останній елемент в масиві
//shift - відрізає перший елемент в масиві
//splice - вирізає якусь частину з масива +string
//slice - вирізає якусь частину з масива (start, end) +string
//indexOf - знаходить номер елементу в масиві +string
//concat - з'єднати кілька масивів

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7]

document.getElementById('q213213').addEventListener('click',function () {
  console.log('-------------------')
  console.log(arr, "arr")
  // const indexOf4 = arr.indexOf(3)

  const lastItem = arr.splice(-1, 1)
  const newArr = arr.concat(arr2)
  //lastItem = [2, 3, 4, 5]
  console.log(lastItem, "lastItem")
  //arr = [1]
  console.log(arr, "arr")
  console.log('-------------------')
}, false)

console.log(arr)