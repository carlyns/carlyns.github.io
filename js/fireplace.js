// TO DO'S
  // build out the summary page

var main = function() {
// collapse all sections on page load

// toggling profile sections
// GOTTA BE AN EASIER WAY THAN TO WRITE THIS FOR EACH ONE??
$('.basicinfo .icon-chevron-down').on("click",function(){
  $( ".basicinfo form" ).toggle(); // class>element needs to be in correct order!
  $(this).toggleClass('.icon-chevron-up' );
  // NOT REMOVING THE DOWN ARROW!
});
$('.interests .icon-chevron-down').on("click",function(){
  $( ".interests form" ).toggle();
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.storage .icon-chevron-down').on("click",function(){
  $( ".storage form" ).toggle();
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.location .icon-chevron-down').on("click",function(){
  $( ".location form" ).toggle();
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.downpayment .icon-chevron-down').on("click",function(){
  $( ".downpayment form" ).toggle();
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});



// Login status shows PersonX

// currently logged in person is: ? ... make sure this is global
var firstN = $('#firstname').val();




// THIS IS ONLY RESET WHEN 'Logout' button is clicked or on Summary Page when another person's profile can be viewed
// "Save Profile" Button at bottom of Create Profile page
// Populate top of Summary Page with Person 1, 2, 3, ... as Profiles are started.

function nextsection() {
  // close the current Section

  // slide down to next Section

  // if last Section, then??
}

function revisesection() {
  // open the Section

  // does it show the same values??  probably only if page wasn't refreshed.  autofill value=" " with the value that has been stored on click

  // "Revise" button instead of "Continue"
}

// IF BUTTON IS WITHIN FORM, IT RELOADS PAGE ON CLICK AND EMPTIES VALUES.  IF IT'S OUTSIDE FORM, IT KEEPS VALUES AND DOESN'T RELOAD THE PAGE. WHY??  keeping buttons outside for now
$('#sec1button').on("click",function(){ // on click of Section 1's continue button
  // save all inputs in variables
  var firstN = $('#firstname').val();
  var lastN = $('#lastname').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var housingtype = $('#housingtype').val();
  if ($('#savescreds').is(":checked")) {
      var savescreds = true;
  }
  else {
    var savescreds = false;
  }
  console.log ( firstN ); // now it worked.
  console.log ( lastN ); // now it worked.
  console.log ( email ); // now it worked.
  console.log ( password ); // now it worked.
  console.log ( savescreds ); // now it worked.
  console.log ( housingtype ); // now it worked.

  nextsection();

});




// if someone is logged in, save those variables under that person's unique "variable" in an array.

// display info only when you're on the summary page.  toggle between 'users'
$('.summary .basicinfo p').html(
  '<p>' + firstN + '</p>'
);





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
    firstName: "Jason",
    lastName: "Alexander",
    email: "jalex@gmail.com",
    yoga: false,
    sport: false
  });

  // Show all sports lovers

  people.forEach(function(element, index){
    if(element.sport){
      // console.log(element.firstName + " " + element.lastName);
    }
  });


  // SMOOTH SCROLLING TO ANCHORS ON PAGE
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

}

$(document).ready(main);
