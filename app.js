// function myFunction() {
//     console.log('("Function practice start")')
// }

function myFunction(multiplier, num) {
    document.write(` ${multiplier} X ${num} = ${multiplier*num} <br>`)
}

for(let i = 1; i < 11; i++) {
    myFunction(2, i, "<br>")
}