location.indexOf( true ); // only gets the first of specific person's array

// this snippet converts the 'trues' to an array of values, representing array position
Array.prototype.multiIndexOf = function (el) {
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
};
// stores in a variable
prefNeighValues = location.multiIndexOf( true );

// Locations:
  // if prefNeighbX is now an array of numbers
  // and allNeighb is an array of strings
  // then I should be able to plug the number from the first as an index number into the second
  var location; // this is declared in each person,
  // the function below takes this array of booleans and converts to values
  // need to create another variable of element.location?




  locationsT.indexOf( true ); // only gets the first of specific person's array

  var prefNeighValues;
  function getNeighborhoodValues () { // using this snippet to get multiples
    Array.prototype.multiIndexOf = function (el) {
        var idxs = [];
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] === el) {
                idxs.unshift(i);
            }
        }
        return idxs;
    };
    // stores in a variable
    prefNeighValues = location.multiIndexOf( true );
  }



  getNeighborhoodValues ();



  console.log(element.firstN + ' prefers ' + element.location);





  // turn neighborhood values into neighborhood strings
  function getNeighborhoodStrings () {
    prefNeighValues.forEach(function( hoodnumber,i ){
      var prefNeighStrings = allNeighb[hoodnumber];
      console.log( prefNeighStrings );
    });
  }
