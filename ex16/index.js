"use strict";
//ex16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list
let gusetlist = [
    "AQSA",
    "NOMI",
    "Sehar",
    "AMI",
    "MANI",
    "ANSA"
];
// step 1: Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
for (let guest of gusetlist) {
    console.log(`hi, ${guest} i Just Got a New Bigger Table for the Dinner Paety1`);
}
// step 2: • Add one new guest to the beginning of your array
console.log("New Guest at the Begniing");
let newguest1 = "Dawood";
gusetlist.unshift(newguest1);
console.log(gusetlist);
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
console.log("New Guest at Middel");
let newguest2 = "Lala";
gusetlist.splice(3, 0, newguest2);
console.log(gusetlist);
// step 4: Use append() to add one new guest to the end of your list.
console.log("New Guest at the End");
let newguest3 = "Zohaib";
gusetlist.push(newguest3);
console.log(gusetlist);
// step 5:  Print a new set of invitation messages, one for each person in your list
gusetlist.forEach((gusetlist) => {
    console.log(`Hello, ${gusetlist} Im inviting u all on Dinner at My Home once Again`);
});
