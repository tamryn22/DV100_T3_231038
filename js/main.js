//trips 
const tripArray = [

  {"name": "French Riviera",
  "price": 550,
  "description": "Code #2240 - The Good Life: Imagine indulgent luncheons with chilled rosé overlooking the sea for 5 days and 4 nights, departing at 10am 15 September 2023. This is life on the French Riviera.",
  "image": "cruise1.jpeg",
  addedDate: "2023-04-29",
  length: 10,
  },
{
  "name": "Mediterranean",
  "price": 400,
  "description": "Code #0909 - Old World Explorations: Departing 05 November 2023, From ancient ruins and atmospheric old quarters to thriving food scenes and sun-drenched beaches, our Mediterranean cruises offer the perfect combination of old-world beauty and modern charisma for 4 days and 3 nights. ",
  "image": "cruise2.jpeg",
  addedDate: "2023-04-29",
  length: 5,
},
{
  "name": "Row Boat",
  "price": 200,
  "description": "Code #0220 - A better place: Explore from 8am for 2 hours rowing through the exciting seas on the 02 November 2023 ",
  "image": "row_boat.jpeg",
  addedDate: "2023-04-29",
  length: 7,
},
{
  "name": "Row Boat",
  "price": 250,
  "description": "Code #2124 - Sale away: on the 04 September 2023, enjoy the ocean blue waters and wildlife that awaits at 9am. From ancient ruins and atmospheric old quarters to thriving food scenes and sun-drenched beaches, our Mediterranean cruises offer the perfect combination of old-world beauty and modern charisma. ",
  "image": "row_boat2.jpeg",
  addedDate: "2023-04-29",
  length: 15,
},
{
  "name": "Row Boat",
  "price": 250,
  "description": "Code #2224 - Sale away: on the 04 September 2023, enjoy the ocean blue waters and wildlife that awaits at 9am. From ancient ruins and atmospheric old quarters to thriving food scenes and sun-drenched beaches, our Mediterranean cruises offer the perfect combination of old-world beauty and modern charisma.",
  "image": "row_boat3.jpeg",
  addedDate: "2023-04-29",
  length: 10,
},
{
  "name": "Row Boat",
  "price":300,
  "description": "Code #2324 - Sale away: on the 04 September 2023, enjoy the ocean blue waters and wildlife that awaits at 9am. From ancient ruins and atmospheric old quarters to thriving food scenes and sun-drenched beaches, our Mediterranean cruises offer the perfect combination of old-world beauty and modern charisma.",
  "image": "row_boat4.jpeg",
  addedDate: "2023-04-29",
  length: 12,
},
{
  "name": "Row Boat",
  "price": 350,
  "description": "Code #2424 - Sale away: on the 04 September 2023, enjoy the ocean blue waters and wildlife that awaits at 9am.",
  "image": "row_boat5.jpeg",
  addedDate: "2023-04-29",
  length: 24,
},
{
  "name": "Greenland",
  "price": 850,
  "description": "Code #3323 - Majestic Landscapes: Our Greenland & Iceland cruises bring you to the edge of the Arctic Circle and fill your days with magnificent fjords from the 3rd of December till the 7th of December 2023, dramatic natural wonders and outdoor adventures on these remote North Atlantic island countries. Departing at 11am ",
  "image": "cruise4.jpeg",
  addedDate: "2023-04-29",
  length: 7,
},
{
  "name": "Alaska",
  "price": 1200,
  "description": "Code #5756 - The Last Frontier: Experience Alaska the way it was meant to be with Oceania Cruises from the 8th December till the 15th December 2023. Revel in the natural wonders of The Last Frontier while enjoying a luxurious small ship experience aboard the beautifully re-inspired Regatta. Our Alaska cruises immerse you in the best of the 49th state – calving glaciers, breathtaking fjords, fascinating wildlife encounters and lively historic gold mining towns like Juneau and Skagway. Depart at 1pm  ",
  "image": "cruise5.jpeg",
  addedDate: "2023-04-29",
  length: 3,
}
  
];

let appliedFilter = "";
let appliedSort = "date added";

// ------------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // $("#heading").text("Oceans Ignite");
    // $("#heading").hover("Oceans Ignite")
    $("#heading").hover(function(){
      $("#heading").text("Oceans Ignite")
    })
    // ------------------------------------------------------------------
    // Browse trips
    // $("#logo").hover(function(){
    //   $("#heading").text("Oceans Ignite")
    // })

    $("#logo").hover(function(){  
      $(this).attr('src','https://jpeg.org/images/jpeg-home.jpg');  
      }, function(){  
      $(this).attr('src','/images/logo.png');  
    });  

    filterSortTrips();

}, 20000);

// ------------------------------------------------------------------------
// Load all Trips
// ------------------------------------------------------------------------

function loadTrips(tripsToShow) {

  // Clear all elements inside the Trips cards container

  $("#tripsContainer").empty();

  // Loop though trips

  for (let i = 0; i < tripsToShow.length; i++) {
    const trips = tripsToShow[i];
    
    console.log(trips.name);

    

    // 1: Select the trips container add the trips card to it
    $("#tripsContainer").append($("#tripCardTemplate").html());

    // 2: Create a variable that contains the most recently added trip card
    let currentChild = $("#tripsContainer").children().eq(i);

    // 3: Set the content for the current trip card from the trip array
    $(currentChild).find("#nameText").text(trips.name);
    $(currentChild).find("#priceText").text("R" + trips.price);
    $(currentChild).find("#descriptionText").text(trips.description);
    $(currentChild).find(".card-img-top").attr('src','/images/' + trips.image);

    // 4: Hide the description text from the curent card
    $(currentChild).find("#descriptionText").hide();
    $(currentChild).find("#originTemp").hide();
    // $(currentChild).find("#purchase").hide();

  };

};


$(".trash1").click(function(){
  $('#1').remove()
})
$(".trash2").click(function(){
  $('#2').remove()
})
$(".trash3").click(function(){
  $('#3').remove()
})
 
$("#clear").click(function(){
  $('#1').remove()
  $('#2').remove()
  $('#3').remove()
})
 

// ------------------------------------------------------------------------
// When a filter or sort option is clicked
// ------------------------------------------------------------------------

$("input[name='filterRadio']").click(function(){
  appliedFilter = $(this).attr('value');

  filterSortTrips();
});

$("input[name='sortRadio']").click(function(){
  appliedSort = $(this).attr('value');

  filterSortTrips();
});

function filterSortTrips() {
  
  let filteredSortedArrTrips = [];

  console.log(appliedFilter);
  console.log(appliedSort);

  // Filter Trips

  if (appliedFilter) {
    filteredSortedArrTrips = tripArray.filter(trips => trips.lightAmount == appliedFilter);
  } else {
    filteredSortedArrTrips = tripArray;
  }

  // Sort trips

  if (appliedSort == "low to high") {

    // Sort trips from the lowest to highest price
    filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
      return a.length - b.length;
    });

  } else if (appliedSort == "date added") {

    // Sort trips from the newest to oldest
    filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
      let da = new Date(a.addedDate);
      let db = new Date(b.addedDate);
    
      return db - da;
    });

  }

  console.log(filteredSortedArrTrips)

  loadTrips(filteredSortedArrTrips);

}

// ------------------------------------------------------------------------
// When a trips card is clicked
// ------------------------------------------------------------------------

$("#tripsContainer").on('click','.card', function() {

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