function1();
function function1() {
  window.addEventListener(
    "keydown",
    function (e) {
      let one = 0;
      let two = 0;
      let three = 0;
      if (e.key == "Shift") {
        one = 125;
      }
      if (e.key == "CapsLock") {
        two = 125;
      }
      if (e.key == "A") {
        three = 125;
      }
      document.body.style.backgroundColor =
        "rgb(" + one + "," + two + "," + three + ")";
    },
    false
  );
}
function2();
function function2() {
  let div1 = document.getElementById("div1");
  div1.addEventListener(
    "click",
    function (e) {
      let i = document.getElementById("input1").value;
      div1.style.height = i + "px";
      console.log(e);
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
  let i = prompt();
  let counter = 0;
  i.addEventListener("keydown", function (e) {
    if (e.key == "q") {
      alert(counter);
    } else {
      let y = prompt;
      counter = counter + y;
    }
  });
}
