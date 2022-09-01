function function1 (e){
    let div = document.getElementById("container")
    let createInput = document.createElement("button")
    createInput.innerHTML= "wow"
    createInput.onclick = function(){ function1()}
    div.appendChild(createInput)
    let createbutton = document.createElement("input")
    createbutton.type= "text"
    createbutton.value = "nothing"
    div.appendChild(createbutton)
    console.log (e)
}