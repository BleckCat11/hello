function function1() {
  let input = document.getElementById("input1");
  input.addEventListener(
    "keypress",
    function (e) {
      if (e.key == " "){
        alert ("you pressed space")
      }
    },
    false
  );
}
function1 ()
