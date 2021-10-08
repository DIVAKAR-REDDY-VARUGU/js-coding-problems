//How do you find the duplicate number on a given integer array?

const input=[1,2,3,4,2,4,6,2,4,1]
let duplicate=new Set()
for(let i of input){
    if(input.indexOf(i)!=input.lastIndexOf(i)){
        duplicate.add(i)
    }
}
console.log([...duplicate])