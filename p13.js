//How do you count a number of vowels and consonants in a given string?
const input='hello i am divakar reddy and my age is 21'
let consonants=0,vowel=0
for(let i of input.split('')){
    if('aeiou'.includes(i.toLowerCase())){
        vowel+=1
    }else if('bcdfghjklmnpqrstuwxyz'.includes(i.toLowerCase())){
        consonants+=1
    }
}
console.log('vowel = ',vowel,' consonants =',consonants);