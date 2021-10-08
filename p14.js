//How do you count the occurrence of a given character in a string?
// console.clear()
const input='hello there this is an input string',search='t'

const count=(a,b)=>a.split('').reduce((co,i)=>(i==b)?co+1:co,0)
console.log(search,'count in given input is ',count(input,search));
