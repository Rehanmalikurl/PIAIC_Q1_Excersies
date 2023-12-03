"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
let gusetlist = [
    "AQSA",
    "NOMI",
    "Sehar",
    "AMI",
    "MANI",
    "ANSA",
];
// step1: Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
gusetlist.forEach((gusetlist) => {
    console.log(`Hello, ${gusetlist} i can invite only 2 prople at dinner Because my Bigger Dinner Table is on Hold for a week.`);
});
// step2: • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
console.log("removing and sending Message");
while (gusetlist.length > 2) {
    let removedguest = gusetlist.pop();
    console.log(`sorry ${removedguest} i cant invite u at Dinne`);
}
// step3:• Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(" guest who are still invited:");
gusetlist.forEach((gusetlist) => {
    console.log(`Hi, ${gusetlist} you are sitll invited at the Dinnder`);
});
// step4:• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
gusetlist.pop();
gusetlist.pop();
console.log(`guestlist after dinne:`, gusetlist);
