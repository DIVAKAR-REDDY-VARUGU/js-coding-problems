//How do you reverse an array in place in JavaScript? In place means you cannot create a new array. You have to update the
let input1=[1,2,3,4,5,6],input2=[1,2,3,4,5,6]
let temp
for(let i=0;i<input1.length/2;i++){
    temp=input1[i]
    input1[i]=input1[input1.length-i-1]
    input1[input1.length-i-1]=temp
}
console.log(input1);
//   OR 
input2=input2.reverse();
console.log(input2);

