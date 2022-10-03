let I = {
   
}
CreateObjackt()
function CreateObjackt(){
let inp = document.getElementById("input1")
let inp1= document.getElementById("input1")
let inp2= document.getElementById("input1")
document.getElementById("button1").addEventListene(
    "click", function (){
        I.name = inp.value
        I.name = inp1.value
        I.name = inp2.value
    }, false
)
}