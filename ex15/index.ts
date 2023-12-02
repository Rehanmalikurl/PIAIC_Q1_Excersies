//ex15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list


let gusetlist:Array<string> = [
    "AQSA",
    "NOMI",
    "BHai",
    "AMI",
    "MANI",
    "ANSA"

]


// setp 1;  Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestwhonotcoming:string="BHai"
console.log(` the guest who can’t make it: ${guestwhonotcoming}`)

// step 2: Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newguest: string= "Sehar";
let indexofguestwhonotcoming: number =gusetlist.indexOf(guestwhonotcoming)
// console.log(indexofguestwhonotcoming)

if (indexofguestwhonotcoming !== -1){
    gusetlist[indexofguestwhonotcoming]= newguest
}
console.log(`New Guest: ${gusetlist[2]}`)

// Print a second set of invitation messages, one for each person who is still in your list

console.log ("2nd List Guests")

gusetlist.forEach((gusetlist)=>{
console.log(`Dear, ${gusetlist} Im inviting u on Dinner at my Home.`)
}

)