var guestList = ["Ahmed", "Rehan", "Ali", "Asif"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Aaa skta");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Salaam ".concat(guest, ", would you like to Dinner with me?")); });
