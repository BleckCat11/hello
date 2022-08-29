//   function numbers() {
//   let input =  + document.getElementsByTagName("input")[0].value;
//   let input2 = document.getElementById("input2");
//   let mathTrunk = Math.trunc(input / 10)
//   let operation1 = input - mathTrunk * 10
//   input2.value = mathTrunk + "                " + operation1
// }

function counting() {
    
    let counter = 0;
    let input = document.getElementById("input").value
    alert (input)
  while (input > 0) {
    
    if (input < 10) {
      counter++;
      input --
      } else{
        counter = counter + 2
        input --
      }
   
  }
  document.getElementById("input2").value = counter
}
