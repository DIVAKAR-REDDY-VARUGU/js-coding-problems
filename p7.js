//How do you print duplicate characters from a string?
const input='iAmDivakarReddya'
let temp=input.split('').sort(),result=''
for(let i=1;i<temp.length; i++){
    if(temp[i-1]===temp[i]){
        result+=temp[i]
    }
}
console.log([...new Set(result)]);