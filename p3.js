//How do you find the largest and smallest number in an unsorted integer array?
const input=[6,4,6,3,2,5,3,6,39,45,22,1,2,45]
let min=max=input[0]
for(let i of input){
    (min>i)?min=i:(max<i)?max=i:max;
}
console.log(min,max);