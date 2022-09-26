function1();
function function1() {
  
  let button1 = document.getElementById("button1");
  button1.addEventListener(
    "click",
    function(){
        
        let input1 = document.getElementById("input1").value;
        let findingS  = input1.indexOf(" ")
        let result = input1.slice(0, findingS)
        document.getElementById("input1").value = result
    }
  )
}


function function2 (){
    let input1 = document.getElementById("inp1").value
    let input2 = document.getElementById("inp2").value
    let y = prompt()
alert (y.slice(input1, input2))
}