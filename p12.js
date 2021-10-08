//How are duplicate characters found in a string?
const input='12323'
let result=new Set();
for(let i of input.split('')){
    (input.indexOf(i)!=input.lastIndexOf(i))?result.add(i):''
}
console.log(...result);