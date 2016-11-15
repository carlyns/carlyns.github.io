var main = function() {

  // CREATE OBJECTS TO STORE USERS AND THEIR FAKE DATA

  //

  var people = [];
  people.push({
    firstName: "Dave",
    lastName: "Turner",
    email: "davetuner81@gmail.com",
    yoga: true,
    sport: true
  });
  people.push({
    firstName: "Dave",
    lastName: "Turner2",
    email: "davetuner81@gmail.com",
    yoga: false,
    sport: false
  });
  people.push({
    firstName: "Dave",
    lastName: "Turner3",
    email: "davetuner81@gmail.com",
    yoga: false,
    sport: false
  });

  // Show all sports lovers

  people.forEach(function(element, index){
    if(element.sport){
      console.log(element.firstName + " " + element.lastName);
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
