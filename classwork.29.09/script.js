disableAgeSmallerThen18()
document.getElementById("button1").disabled = true
function disableAgeSmallerThen18 (){
    let input1 = document.getElementById("input1")
    input1.addEventListener("keyup",
    function(){
        if (input1.value >= 18 && input1.value <= 80){
            document.getElementById("button1").disabled = false
       }
    
         else{
            document.getElementById("button1").disabled = true
        }
        

    }
    
    )
}