"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoritetransport = [];
favoritetransport.push(["bikecycle", "Road Prince"]);
favoritetransport.push(["car", "Mehru"]);
favoritetransport.push(["cycle", "BABA Cycle"]);
// console.log(favoritetransport)
favoritetransport.forEach(([transport, brand]) => {
    console.log(`i would like to own a ${brand} ${transport}`);
});
