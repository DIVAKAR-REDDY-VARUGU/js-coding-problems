//How can a given string be reversed using recursion?

const rev=s=>(s.length===0)?'':rev(s.substring(1))+s[0]
console.log(rev('divakar reddy'));
