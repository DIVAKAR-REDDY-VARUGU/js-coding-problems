//How do you check if two strings are a rotation of each other?
const input1='abcda1',input2='1adcba'

const rotate=(a,b)=>{
    if(a.length!=b.length){
        return false
    }
    for(let i=0;i<a.length;i++){
        if(a[i]!=b[b.length-1-i]){
            return false
        }
    }
    return true 
}
console.log(input1,input2,'are ',(rotate(input1,input2)?'Equal':'NOT Equal'))
