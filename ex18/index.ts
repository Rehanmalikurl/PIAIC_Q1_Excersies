// Seeing the World: Think of at least five places in the world you’d like to visit.
//1 • Store the locations in a array. Make sure the array is not in alphabetical order.

//2 • Print your array in its original order.

// 3• Print your array in alphabetical order without modifying the actual list.

// •4 Show that your array is still in its original order by printing it.

// • 5Print your array in reverse alphabetical order without changing the order of the original list.

// • 6Show that your array is still in its original order by printing it again.

// • 7Reverse the order of your list. Print the array to show that its order has changed.

// •8 Reverse the order of your list again. Print the list to show it’s back to its original order.

// • 9Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// •10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed


// step1 ; // • Store the locations in a array. Make sure the array is not in alphabetical order.

let destinations:string[] = [ "turkey", "iceland", "paris", "bali","naran"]

// step2: Print your array in its original order.
console.log(`\n Orignal order ${destinations}`)

// step3: // • Print your array in alphabetical order without modifying the actual list.
console.log("\n alphabetical Order")
console.log([...destinations].sort())

// step4: // • Show that your array is still in its original order by printing it.
console.log(`\n Orignal order: ${destinations}`)

// • step5; Print your array in reverse alphabetical order without changing the order of the original list..
console.log(`\n Reverse alphabeticl Order: ${[...destinations].sort().reverse()}`)


// • step6; Show that your array is still in its original order by printing it again.
console.log(`\n Orignal order: ${destinations}`)

// • step7; Reverse the order of your list. Print the array to show that its order has changed
console.log(`P.Reverse order ${destinations.reverse()}`)
console.log(`N. Orignal order; ${destinations}`)
//step8: • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`\n reReverse Order: ${destinations.reverse().reverse()}`)
console.log(`\n Orignalback order: ${destinations}`)

// step9:// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`\n Alphabetical Order: ${destinations.sort()}`)
console.log(`\n orignal order:${destinations}`)

// •10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log(`\n Reverse Alphabetical Order: ${destinations.sort().reverse()}`)
