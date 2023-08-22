// ------------------------------------------------------------------------
// Plants Array
// ------------------------------------------------------------------------
const tripArray = [

  {"name": "French Riviera",
  "price": 550,
  "description": "The Good Life: Imagine indulgent luncheons with chilled rosé overlooking the sea, driving into the hills of medieval Éze, whiling away the afternoon at Monte Carlo’s Princess Grace Rose Garden and strolling Cannes’ palm-lined La Croisette. This is life on the French Riviera.",
  "image": "cruise1.jpeg",
  addedDate: "2023-04-29",
  },
{
  "name": "Mediterranean",
  "price": 400,
  "description": "Old World Explorations: From ancient ruins and atmospheric old quarters to thriving food scenes and sun-drenched beaches, our Mediterranean cruises offer the perfect combination of old-world beauty and modern charisma. ",
  "image": "cruise2.jpeg",
  addedDate: "2023-04-29",
},
{
  "name": "Greek Isles",
  "price": 950,
  "description": "Made For The Gods: Our Greek Isles cruises open the door to journeys that unfold in lands of epic history and play out on sultry islands lined with whitewashed villages.",
  "image": "cruise3.jpeg",
  addedDate: "2023-04-29",
},
{
  "name": "Greenland",
  "price": 850,
  "description": "Majestic Landscapes: Our Greenland & Iceland cruises bring you to the edge of the Arctic Circle and fill your days with magnificent fjords, dramatic natural wonders and outdoor adventures on these remote North Atlantic island countries. ",
  "image": "cruise4.jpeg",
  addedDate: "2023-04-29",
},
{
  "name": "Alaska",
  "price": 1200,
  "description": "The Last Frontier: Experience Alaska the way it was meant to be with Oceania Cruises. Revel in the natural wonders of The Last Frontier while enjoying a luxurious small ship experience aboard the beautifully re-inspired Regatta. Our Alaska cruises immerse you in the best of the 49th state – calving glaciers, breathtaking fjords, fascinating wildlife encounters and lively historic gold mining towns like Juneau and Skagway. ",
  "image": "cruise5.jpeg",
  addedDate: "2023-04-29",
}
  
];

let appliedFilter = "";
let appliedSort = "date added";

// ------------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // ------------------------------------------------------------------
    // Home

    // When the document loads, animate the hero image upwards
    $("#hero-image").animate({top: '-=100px'});

    // ------------------------------------------------------------------
    // Browse

    filterSortPlants();

});

// ------------------------------------------------------------------------
// Load all plants
// ------------------------------------------------------------------------

function loadPlants(plantsToShow) {

  // Clear all elements inside the plants cards container

  $("#plantsContainer").empty();

  // Loop though plants

  for (let i = 0; i < plantsToShow.length; i++) {
    const plant = plantsToShow[i];
    
    console.log(plant.name);

    

    // 1: Select the plants container add the plant card to it
    $("#plantsContainer").append($("#tripCardTemplate").html());

    // 2: Create a variable that contains the most recently added plant card
    let currentChild = $("#plantsContainer").children().eq(i);

    // 3: Set the content for the current plant card from the plant array
    $(currentChild).find("#nameText").text(plant.name);
    $(currentChild).find("#priceText").text("R" + plant.price);
    $(currentChild).find("#descriptionText").text(plant.description);
    $(currentChild).find(".card-img-top").attr('src','/images/' + plant.image);

    // 4: Hide the description text from the curent card
    $(currentChild).find("#descriptionText").hide();
    $(currentChild).find("#originTemp").hide();

  };

};

// ------------------------------------------------------------------------
// When a filter or sort option is clicked
// ------------------------------------------------------------------------

$("input[name='filterRadio']").click(function(){
  appliedFilter = $(this).attr('value');

  filterSortPlants();
});

$("input[name='sortRadio']").click(function(){
  appliedSort = $(this).attr('value');

  filterSortPlants();
});

function filterSortPlants() {
  
  let filteredSortedArrPlants = [];

  console.log(appliedFilter);
  console.log(appliedSort);

  // Filter Plants

  if (appliedFilter) {
    filteredSortedArrPlants = tripArray.filter(plant => plant.lightAmount == appliedFilter);
  } else {
    filteredSortedArrPlants = tripArray;
  }

  // Sort Plants

  if (appliedSort == "low to high") {

    // Sort plants from the lowest to highest price
    filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
      return a.price - b.price;
    });

  } else if (appliedSort == "date added") {

    // Sort plants from the newest to oldest
    filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
      let da = new Date(a.addedDate);
      let db = new Date(b.addedDate);
    
      return db - da;
    });

  }

  console.log(filteredSortedArrPlants)

  loadPlants(filteredSortedArrPlants);

}

// ------------------------------------------------------------------------
// When a plant card is clicked
// ------------------------------------------------------------------------

$("#plantsContainer").on('click','.card', function() {

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();
  $(this).find("#originTemp").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});

$(document).ready(function(){
  
  $.ajax({
    type: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?q=Hazyview&appid=4427bb3e3979e449edbf9268e4cb2142",
    success: function (data) {
      temp = data;
      console.log(temp);
    },

  }).done(function () {
    // Set Temperature
    $("#temp").html(Math.round(temp.main.temp- 273) + " °C");
  
  });

})