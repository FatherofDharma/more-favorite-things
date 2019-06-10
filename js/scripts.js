//business logic




//interface logic

$(function() {
var favLists = [];
  $("#favorite").submit(function(event) {
    var personInput = $("input#person").val();
    var thingInput = $("input#thing").val();
    var placeInput = $("input#place").val();

    favLists.push(personInput, thingInput, placeInput);
    var personFinal = favLists[0];
    var thingFinal = favLists[1];
    var placeFinal = favLists[2];

    $("#results").show();
    $("#personFinal").text(personFinal);
    $("#thingFinal").text(thingFinal);
    $("#placeFinal").text(placeFinal);

    event.preventDefault();
  });

});
