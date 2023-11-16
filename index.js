//Local Module 

const {add, a} = require('./local-1.js')
const {add:add2, a:a2} = require('./local-2.js') //name alias er maddhome add er name ta change kore dilam


console.log(add2(2, 3, 4));

//Built-in-modules

const path = require("path")
console.log(path.parse("/E:/next-level/mission-2/learning-node/index.js"))