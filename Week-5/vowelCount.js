/*
In this code, I have followed all the guidelines given in assignment
1.function called vowelCount which accepts a string and returns a map
2.keys arenumbers and the values are the count of the vowels in the string
*/
//vowel validator function
function vowelValidator(character) {
  vowels = "aeiou";
  return vowels.includes(character);
}
//vowel counter function
function countVowel(sentence) {
  const mapVowel = new Map();
  for (let element of sentence) {
    let lowerConverted = element.toLowerCase();
    if (vowelValidator(lowerConverted)) {
      if (mapVowel.has(lowerConverted)) mapVowel.set(lowerConverted, mapVowel.get(lowerConverted) + 1); 
      else mapVowel.set(lowerConverted, 1);
    }
  }
  return mapVowel;
}
let inputstring = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, 
nulla alias rem dicta omnis maxime earum aperiam at, unde impedit reprehenderit commodi illum. 
Iusto, repellendus nesciunt quasi doloribus consequatur voluptate!`;
let getCounted = countVowel(inputstring);
console.log(getCounted);