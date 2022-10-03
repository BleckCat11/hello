// let I = {

// }
let objects = [];
// CreateObjackt()

// function CreateObjackt() {
//     let inp = document.getElementById("input1")
//     let inp1 = document.getElementById("input2")
//     let inp2 = document.getElementById("input3")
//     document.getElementById("button1").addEventListene(
//         "click", function () {
//             I.name = inp.value
//             I.name = inp1.value
//             I.name = inp2.value
//         }, false
//     )
// }

document.getElementById("button1").addEventListener(
    "click", function () {
        let inp = document.getElementById("input1").value
        let inp1 = document.getElementById("input2").value
        let inp2 = document.getElementById("input3").value
        createObject(inp, inp1, inp2)
    }, false
)

function createObject(name1, surname1, age1) {
    let user = {
        name: name1,
        surname: surname1,
        age: age1,
    }
    objects.push(user)
}

createObject('Mark', 'Zukerberg', 57)