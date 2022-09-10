function1()
function function1() {
  let divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener(
      "mauseover",
      function () {
        divs[i].style.backgroundColor = 'rgb ( '+ 123 +' ,' +234+ ',' +45+') '
      },
      false
    );
  }
}

function function2_buttom (){

document.getElementById("div4").style.buttom =  + "px"

}
function function2_top (){
 
    document.getElementById("div4").style.top = 10 + "px"
   
}
function function2_right (){
    document.getElementById("div4").style.right = 10 + "px" 
}
function function2_left (){
    document.getElementById("div4").style.left = 10 + "px"
}

function function3(){
    let div = document.getElementById("div6")
    div.addEventListener("click"
    ,function (e){
        
        document.getElementById("div4").style.height = + 10 + "px"
    },false
    )
    div.addEventListener("dobleclick",
    function (e){
        document.getElementById("div4").style.height = - 10 + "px"
    },false
    
    )

}
function function4 (){
    
    document.body.addEventListener("click", function (){
        alert("Click was done")
    }
    
    
    )
}

