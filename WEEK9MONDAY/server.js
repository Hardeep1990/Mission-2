/*console.log("Hello node!");
function String(str){
    console.log("hello - "  +  str);
}
String('node');*/
const myModule = require('./myModule');
console.log(myModule);
const sum = myModule.addNums(2,4);
const sub = myModule.subtractNums(4,1);
const isNum = myModule.isNumber(1);

console.log("addition of 2 nums = " + sum);
console.log("Substraction of 2 nums = " + sub);
console.log("Boolean value of 2 nums = " + isNum);

