//Business Logic
var locationNameInput;
var locationLocationInput;
var locationDateInput;
var locationDetailsInput;
var allLocationFull = new AllLocations();

function AllLocations() {
  this.locations = [],
  this.currentId = 0
}

AllLocations.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(location);
}

AllLocations.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Location(locationNameInput, locationLocationInput, locationDateInput, locationDetailsInput) {
  this.locationNameInput = locationNameInput,
  this.locationLocationInput = locationLocationInput,
  this.locationDateInput = locationDateInput,
  this.locationDetailsInput = locationDetailsInput
};

//----User----Interface----Logic-----------------
$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    locationNameInput = $("input#locationName").val();
    locationLocationInput = $("input#locationLocation").val();
    locationDateInput = $("input#locationDate").val();
    locationDetailsInput = $("input#locationDetails").val();
    var locationFull = new Location(locationNameInput, locationLocationInput, locationDateInput, locationDetailsInput);
    allLocationFull.addLocation(locationFull);
    $("#userOutput").append("<p class='clickable 'id='"+allLocationFull.currentId+"'>"+locationNameInput+"</p>");
    $("#locationOutput").append('<div class="info" id=info' + allLocationFull.currentId + '>' + Object.values(allLocationFull.locations[allLocationFull.currentId-1])+'</div>');

    $(".clickable").click(function(event) {
      var id = $(this).attr('id');
      var idName = "#info" + id;
      console.log(idName);
      $(idName).show();
    });
  });
});
