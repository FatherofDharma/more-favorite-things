//business logic




//interface logic

$(function() {
var favLists = [];
  $("#favorite").submit(function(event) {
    var personInput = $("input#person").val();
    var thingInput = $("input#thing").val();
    var placeInput = $("input#place").val();

    favLists.push(personInput, thingInput, placeInput);
    $("#results").show();
    $("#placeFinal").text(favLists);
    console.log(favLists);
    event.preventDefault();
  });

});
