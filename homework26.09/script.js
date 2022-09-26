function1();
function function1() {
  let arr = ["nothing", "something", "anything"];
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  button1.addEventListener(
    "click",
    function () {
      document.getElementById("div1").innerHTML = arr[arr.length - 1];
      arr.splice(-1, 1);
    },
    false
  );
  button2.addEventListener(
    "click",
    function () {
      document.getElementById("div1").innerHTML = arr[0];
      arr.splice(0, 1);
    },
    false
  );
}
function2();
function function2() {
  let arr = ["nothing", "something", "anything"];
  let button = document.getElementById("button3");
  button.addEventListener(
    "click",
    function () {
      for (let i ; i < arr.length; i++) {
        if (document.getElementById("input1") == arr[i]) {
          arr.slice(i,i)
        } else{
            alert ("wrong")
        }
      }
    },
    false
  );
}
