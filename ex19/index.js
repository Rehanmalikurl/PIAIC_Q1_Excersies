"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
const ex15_1 = require("../ex15");
console.log(`fainally we invuted ${ex15_1.guestlist.length} at the dinnder.`);
ex15_1.guestlist.forEach((guestlist) => {
    console.log(`${guestlist} U R Inviteted on dinner at my home `);
});
