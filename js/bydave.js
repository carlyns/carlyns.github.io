var people = [];
people.push({ // .push just adds these to an array
  firstName: "Larry",
  lastName: "David",
  email: "larryd@gmail.com",
  housingtype: "3-8",
  yoga: true,
  sport: true
});
people.push({
  firstName: "Julia",
  lastName: "Louis-Dreyfus",
  email: "julial@gmail.com",
  yoga: false,
  sport: false
});
people.push({
  // properties of this object
  firstName: "Jason",
  lastName: "Alexander",
  email: "jalex@gmail.com",
  yoga: false,
  sport: false
});

// Show all sports lovers

people.forEach(function(element, index){
  if(element.sport){
    console.log(element.firstName + " " + element.lastName);  // getting a property of each element that fits the SPORT condition
  }






/* ----------- probs gonna use ----------- */

// JS // to trim whitespace from start and end of string
  trim();

// JS // grabs character at that index number
  charAt();

// maybe creating a new element
  document.createElement();
  appendChild();
  insertBefore();
  // what is this in JQ?
    .after();
    .unwrap(); // pg 346
    .add();
  // JQ //
    .before(); .after(); // outside of tag!
    .prepend(); .append(); // insdie of tag!


// JQ // finding elements/values from a form.  pg 342
  :checkbox
  :selected
  :checked

// JQ // chaining to get values of all elements, not just first
  .each();

// JQ // get or set attribute values
  .attr();
