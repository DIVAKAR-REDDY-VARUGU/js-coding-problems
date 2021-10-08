//How do you print the first non-repeated character from a string?
const input='divakarReddy'
for(let i of [...input]){
    if(input.indexOf(i)===input.lastIndexOf(i)){ console.log(i);break;}
}