// Saturday todo list
//* AM : Walk the Dogs
//12 pm :Lunch
//3pm : Watch a Movie.
 // Create a new Map() add each value in a todo as a key-value pair.

const saturday = new Map();
saturday.set(8,"__Walk the dogs__");
saturday.set(12,"__lunch__");
saturday.set(3,"__Watch a movie__");
saturday.set(4,"__Feed the cat__");
console.log(saturday);
//saturday.clear();
//Get the Value associated with key 12
const noon = saturday.get(12);
console.log("What am I doing at 12pm on saturday",noon);
const morning = saturday.get(8);
console.log("In the morning 8 O Clock our time is to",morning);
