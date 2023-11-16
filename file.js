//synchronise way te data create and passing

const fs = require('fs')

//reading a file text 

const readText = fs.readFileSync('./texts/read.txt', 'utf-8')
console.log(readText)

//Writing a Text 
const writtenText = fs.writeFileSync('./texts/write.txt', readText + 'This is my written text')