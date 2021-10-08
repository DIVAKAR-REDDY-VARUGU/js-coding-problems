//How do you check if two strings are anagrams of each other?\
let inp1='hello',inp2='llohe';
((inp1.split('').sort().join(''))===(inp2.split('').sort().join('')))?console.log(' Anagrams'):console.log('Not Anagrams');