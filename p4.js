//How do you find all pairs of an integer array whose sum is equal to a given number?
const input=[0,1,4,2,5,7,3,6,5,8,9],target=8
let result=[]
let update=(a,b)=>{
    for(let i of result){
        if(i[0]===a){return}
    }
    result.push([a,b])
}
for(let i of input){
    if(i<=target){
        if(input.indexOf(target-i)!=-1){
            update(i,target-i)
        }
    }
}
console.log(result);
