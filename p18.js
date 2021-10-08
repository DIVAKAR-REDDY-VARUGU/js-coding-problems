//How do you check if a given string is a palindrome?
const input='missiuiissim'
let i,flag=0
for(i=0;i<input.length/2;i++){
    if(input[i]!=input[input.length-i-1]){
        console.log('not a polindrome ');
        flag=1
        break
    }
}
if(!flag){
    console.log('it is a polindrome ');
}