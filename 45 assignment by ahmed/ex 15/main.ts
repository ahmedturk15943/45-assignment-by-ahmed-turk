let guestList = ["Ahmed", "Rehan", "Ali", "Asif"];

let dontCome = guestList[0];

console.log(dontCome,"Nahi Aaa skta");

guestList.splice(0, 1, "Amirr");

guestList.forEach(guest => console.log(`Salaam ${guest}, would you like to Dinner with me?`));
