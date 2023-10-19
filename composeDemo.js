import { compose } from "redux"
function removeSpaces(string){
    return string.split(" ").join("")
}

function repeatString(string){
    return string.repeat(3)
}

function convertUpperCase(string){
    return string.toUpperCase()
}
const input = "aaa bbb ccc ddd"

// const output = convertUpperCase(repeatString(removeSpaces(input)))
// console.log(output)

const composedOutput = compose(removeSpaces,repeatString,convertUpperCase)
console.log(composedOutput(input))