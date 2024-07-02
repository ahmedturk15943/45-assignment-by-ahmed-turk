let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Aaa Saktey han");

guestList.splice(0, 1, "Amirr");

console.log("Good News ! We have found a Bigger Table For Dinner.");

guestList.unshift("Ali");

guestList.push("Zain");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Osama");

console.log("Updated List of our Guests");

guestList.forEach(oneguest => console.log(`Salaam ${oneguest}, would you like to dinner with me`));