// collapse all sections on page load


// toggling profile sections
// GOTTA BE AN EASIER WAY THAN TO WRITE THIS FOR EACH ONE??
$('.basicinfo .icon-chevron-down').on("click",function(){
  $( ".basicinfo form" ).toggle(); // class>element needs to be in correct order!
  $('.basicinfo .display').toggle();
  $('.icon-chevron-down').toggleClass('.icon-chevron-up'); // NOT REMOVING THE DOWN ARROW!

  // also add toggling to summary data
  // (need to put it in a div?)

});
$('.interests .icon-chevron-down').on("click",function(){
  $( ".interests form" ).toggle();
  $('.interests .display').toggle();

  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.extra .icon-chevron-down').on("click",function(){
  $( ".extra form" ).toggle();
  $('.extra .display').toggle();
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.location .icon-chevron-down').on("click",function(){
  $( ".location form" ).toggle();
  $('.location .display').toggle();
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.downpayment .icon-chevron-down').on("click",function(){
  $( ".downpayment form" ).toggle();
  $('.downpayment .display').toggle();
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});



// Login status shows PersonX

// currently logged in person is: ? ... make sure this is global
var firstN;
var lastN;
var lastinitial;
var email;
var housingtype;
var savescreds;


// this is only reset 'Logout' button is clicked or on Summary Page when another person's profile can be viewed
// "Save Profile" Button at bottom of Create Profile page
// Populate top of Summary Page with Person 1, 2, 3, ... as Profiles are started.

function continueEditTogg() {

}

function nextsection() {
  // close the current Section

  // slide down to next Section

  // if last Section, then??
}

function revisesection() {
}

// on click of Section 1's continue button
$('#sec1button').on("click",function(){
  // save all inputs in variables
  firstN = $('#firstname').val();
  lastN = $('#lastname').val();
  lastinitial = lastN.charAt(0); // DOES VAR NEED TO BE WRAPPED IN () ??
  email = $('#email').val();
  password = $('#password').val();
  housingtype = $('#housingtype').val();
  if ($('#savescreds').is(":checked")) {
    savescreds = true;
  }
  else {
    savescreds = false;
  }
  console.log ( firstN ); // now it worked.
  console.log ( lastN ); // now it worked.
  console.log ( email ); // now it worked.
  console.log ( password ); // now it worked.
  console.log ( savescreds ); // now it worked.
  console.log ( housingtype ); // now it worked.


  // display user info upon submit
  function displayBasicInfo() {
    $('.basicinfo .summary').html(
      '<p>' + firstN + '</p>'
      + '<p>' + lastinitial + '</p>'
      + '<p>' + email + '</p>'
      + '<p>' + housingtype + '</p>'
    );
  }
  displayBasicInfo();

  // hide input form
  $('.basicinfo form').hide();
  // can't hide button bc there's no way to toggle it back on edit

  $('#sec1button').html('Edit');

  nextsection();

});



var checkedInterests = [];
var otherInterest;
// on click of Section 2's continue button
$('#sec2button').on("click",function(){

  // which interests were checked
  $('[name="interest"]:checked').each(function(i,e){
    checkedInterests.push(e.value);
  });
  otherInterest = $('#other-interest').val();

  console.log(checkedInterests); // yaay this worked.
  $('.interests .summary').append(checkedInterests + ", " + otherInterest);


  //uncheck checkboxes, field & empty array
  $('.interests form').find('input[type=checkbox]:checked').removeAttr('checked');
  $('#other-interest').val('');

  checkedInterests = [];

  // hide input form & button
  $('.interests form').hide();
  // can't hide button bc there's no way to toggle it back on edit

});


var checkedExtras = [];
var otherExtra;
// on click of Section 3's continue button
$('#sec3button').on("click",function(){
  // which extras were checked
  $('[name="extra"]:checked').each(function(i,e){
    checkedExtras.push(e.value);
  });
  otherExtra = $('#other-extra').val();

  console.log(checkedExtras);
  $('.extra .summary').append(checkedExtras + ", " + otherExtra); // space after comma is not showing

  //uncheck checkboxes, field & empty array
  $('.extra form').find('input[type=checkbox]:checked').removeAttr('checked');
  $('#other-extra').val('');

  checkedExtras = [];

  // hide input form & button
  $('.extra form').hide();
  // can't hide button bc there's no way to toggle it back on edit

});

var afforddown;
// on click of Section 5's continue button
$('#sec5button').on("click",function(){
  afforddown = $('#afforddown').val();

  console.log(afforddown);
  $('.downpayment .summary').append(afforddown);

  // empty input form & empty variable
  afforddown = ''; // NOT EMPTYING VARIABLE
  $('#afforddown').val('$'); // yes, removing value in field




});



/* ----------- Fake Data ----------- */

// EVEN THOUGH I'M USING GLOBAL VARIABLES TO STORE FORM VALUES, I'M USING LOCAL VARIABLES BELOW AS OBJECT PROPERTIES (IS THIS CORRECT??) ... THEY SHOULD BE THE SAME IF BACKEND WAS CONFIGURED. FOR THESE PURPOSES, THERE DOESN'T SEEM TO BE A CONFLICT

var people = [];
people.push({ // .push just adds these to an array
  firstN: "Valerie",
  lastN: "Gaglio",
  email: "valentina@gmail.com",
  housingtype: "3-8 unit building",
  music: true,
  travel: true,
  sports: false,
  garage: true,
  carsharing: false,
  guestsuite: true,
  coworking: true,
  musicroom: true,
  eventspace: false,
  bikeroom: true,
  personalstorage: false,
  toolshed: true,
  // location
  uptown: true,


  afforddown: 4000,


});
people.push({
  firstN: "Kenneth",
  lastN: "Atlas",
  email: "wherekenat@gmail.com",
  housingtype: "2 unit building",
  music: true,
  travel: true,
  sports: true,
  garage: true,
  carsharing: true,
  guestsuite: true,
  coworking: false,
  musicroom: false,
  eventspace: false,
  bikeroom: true,
  personalstorage: true,
  toolshed: true,
  // location
  westtown: true,

  afforddown: 20000,

});
people.push({
  firstN: "Mike",
  lastN: "McKinley",
  email: "mm38@gmail.com",
  housingtype: "15+ unit building",
  music: true,
  travel: false,
  sports: true,
  garage: false,
  carsharing: true,
  guestsuite: true,
  coworking: false,
  musicroom: true,
  eventspace: true,
  bikeroom: false,
  personalstorage: true,
  toolshed: true,
  otherspace: "beermaking",
  // location
  rivernorth: true,
  // CAN I MAKE MULTIPLE SELECTED NEIGHBORHOODS AN ARRAY CALLED 'LOCATION', CALL ALL THESE VALUES LATER, AND SORT ALL OF THEM?
    // SORT OF LIKE:
    // var location = [rivernorth, streeterville, oakpark]
    // location1 + location2 + location3 + location4
    // var allpeopleloc = [rivernorth, streeterville, oakpark, pilsen, rogerspark, rivernorth, pilsen, bridgeport, bronzeville, oakpark, bridgeport, pilsen]
    // var sorted = [pilsen, pilsen, pilsen, bridgeport, bridgeport, oakpark, oakpark, rivernorth, rivernorth, streeterville, rogerspark]


  afforddown: 8000,

});
people.push({
  // DOES THE ORDER NEED TO BE CONSISTENT BETWEEN people OBJECTS?
  firstN: "Teresa",
  lastN: "Anjo",
  email: "tangel@gmail.com",
  housingtype: "3-8 unit building",
  music: true,
  travel: false,
  sports: false,
  garage: true,
  carsharing: true,
  guestsuite: true,
  coworking: false,
  musicroom: false,
  eventspace: false,
  bikeroom: true,
  personalstorage: true,
  toolshed: true,
  // location
  qualities: "somewhere with trees, good schools, nice buildings and low crime rate",

  afforddown: 30000,

});

// trying something different for location
var locations = [];
  // loop through people, find the ones tagged with an attribute?
  // grab key value


/* ----------- end of 'Fake Data' ----------- */


/* ----------- Looping ----------- */
people.forEach(function(element, index){ // WHAT IS ELEMENT AND INDEX REPRESENTING IN THIS CASE??  ELEMENT = KEYS?

  if(element.sports){
    //console.log(element.firstN);  // getting a property of each element that fits the SPORTS condition
  }

  // show group members (remember element is a local parameter!)
  $('.basicinfo .display h3:first').after(
    element.firstN + " " + element.lastN + ", "
  ); // HOW DO YOU CHANGE ORDER?
  // CURRENTLY UNWRAPPED

  // get the properties/keys of the people objects??
  var keys = Object.keys(people);
  //console.log( keys );

  // show housing type preferences
  $('.basicinfo .display h3').next().after(
    element.firstN + " wants to live in a " + element.housingtype + ", "
  );
  // WHY DOES CHANGING THE COMMA TO <br> LOOP THROUGH WEIRDLY??

  // show interests (make this one function??)
  if(element.music){ //.interests h3:first
    $('#display-music').after(
    "| " + element.firstN
    );
  }
  if(element.travel){ // .interests h3 +.next() ... BETTER WAY THAN USING next/last/first? ... otherwise #ids
    $('#display-travel').after(
      "| " + element.firstN
    );
  }
  if(element.sports){ //.interests h3:last
    $('#display-sports').after(
      "| " + element.firstN
    );
  }

  // show extra spaces & amenities (make this one function??)
  if(element.garage){
    $('#display-garage').after(
      "| " + element.firstN
    );
  }
  if(element.carsharing){
    $('#display-carsharing').after(
      "| " + element.firstN
    );
  }
  if(element.guestsuite){
    $('#display-guestsuite').after(
      "| " + element.firstN
    );
  }
  if(element.coworking){
    $('#display-coworking').after(
      "| " + element.firstN
    );
  }
  if(element.musicroom){
    $('#display-musicroom').after(
      "| " + element.firstN
    );
  }
  if(element.eventspace){
    $('#display-eventspace').after(
      "| " + element.firstN
    );
  }
  if(element.bikeroom){
    $('#display-bikeroom').after(
      "| " + element.firstN
    );
  }
  if(element.personalstorage){
    $('#display-personalstorage').after(
      "| " + element.firstN
    );
  }
  if(element.toolshed){
    $('#display-toolshed').after(
      "| " + element.firstN
    );
  }
  if(element.otherspace){
    $('#display-otherspace').after(
      element.otherspace + ", "
    );
  }

  // display each down payment contribution
  $('.downpayment .display').after(
    element.afforddown + " + "
  );




});
/* ----------- Looping ends here ----------- */




// experiement with local data only with "logged in" user in upper corner ...



  // smooth scrolling to anchors on page
  // snippet from https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
