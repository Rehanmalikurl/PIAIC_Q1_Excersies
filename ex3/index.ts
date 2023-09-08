// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// step 1 = Lowercase
let personName:string= "muhammad rehan malik"
let lowercase: string= personName.toLowerCase();

console.log(lowercase);

// step 2 = Uppercase

let Uppercase: string= personName.toUpperCase();
console.log(Uppercase);

// step 3 = titelcase with Array, for loop and their functions

let words: string[]= personName.split(" ");
let titelcaseName: string= "";
for(let i = 0; i<words.length; i++){
    titelcaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
}
console.log(titelcaseName);
