var guestlist = ["Aseel", "Nouf", "Reema", "Raya"];
var UserInput = prompt("What is your name?");
if (guestlist.includes(UserInput)) {
        console.log("Welcome!");
}
else {
        console.log("Your name is not on the list");
}