//How do you find the missing number in a given integer array of 1 to 100?

console.clear()
const input=[1,2,6,4,7,8,9,11,12,13,15,16,24,25,36,58]
for(let i=1;i<=100;i++){
    if(input.indexOf(i)===-1){
        console.log(i)
    }
}