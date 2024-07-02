var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Aaa Saktey han");
guestList.splice(0, 1, "Amirr");
console.log("Good News ! We have found a Bigger Table For Dinner.");
guestList.unshift("Ali");
guestList.push("Zain");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Osama");
console.log("Updated List of our Guests");
guestList.forEach(function (oneguest) { return console.log("Salaam ".concat(oneguest, ", would you like to dinner with me")); });
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
console.log("Invitations to the Last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
