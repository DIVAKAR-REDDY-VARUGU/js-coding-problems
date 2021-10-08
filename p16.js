//How do you reverse words in a given sentence without using any in-built method?

const input='My name is Divakar Reddy'
let result=input.split(' '),temp;
console.log(...result);
for(let i=0;i<result.length/2;i++){
    temp = result[i]
    result[i]=result[result.length-i-1]
    result[result.length-i-1]=temp
}
console.log(...result);