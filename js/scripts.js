//business logic




//interface logic

$(function() {
var favLists = [];
  $("#favorite").submit(function(event) {
    var personInput = $("#person").val();
    var thingInput = $("#thing").val();
    var placeInput = $("#place").val();

    favLists.push(personInput, thingInput, placeInput);
    console.log(favLists);

    event.preventDefault();
  });

});
