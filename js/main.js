const trip = [

    {"name": "French Riviera",
    "price": 550,
    "description": "The Good Life: Imagine indulgent luncheons with chilled rosé overlooking the sea, driving into the hills of medieval Éze, whiling away the afternoon at Monte Carlo’s Princess Grace Rose Garden and strolling Cannes’ palm-lined La Croisette. This is life on the French Riviera.",
    "image": "cruise1.jpeg"
    },
  {
    "name": "Mediterranean",
    "price": 400,
    "description": "Old World Explorations: From ancient ruins and atmospheric old quarters to thriving food scenes and sun-drenched beaches, our Mediterranean cruises offer the perfect combination of old-world beauty and modern charisma. ",
    "image": "cruise2.jpeg"
  },
  {
    "name": "Greek Isles",
    "price": 950,
    "description": "Made For The Gods: Our Greek Isles cruises open the door to journeys that unfold in lands of epic history and play out on sultry islands lined with whitewashed villages.",
    "image": "cruise3.jpeg"
  },
  {
    "name": "Greenland",
    "price": 850,
    "description": "Majestic Landscapes: Our Greenland & Iceland cruises bring you to the edge of the Arctic Circle and fill your days with magnificent fjords, dramatic natural wonders and outdoor adventures on these remote North Atlantic island countries. ",
    "image": "cruise4.jpeg"
  },
  {
    "name": "Alaska",
    "price": 1200,
    "description": "The Last Frontier: Experience Alaska the way it was meant to be with Oceania Cruises. Revel in the natural wonders of The Last Frontier while enjoying a luxurious small ship experience aboard the beautifully re-inspired Regatta. Our Alaska cruises immerse you in the best of the 49th state – calving glaciers, breathtaking fjords, fascinating wildlife encounters and lively historic gold mining towns like Juneau and Skagway. ",
    "image": "cruise5.jpeg"
  }
    
];

$(document).ready(function ()  {

    $("#checkout").click(function(){

        console.log("Payment");
        alert("Purchase Successful!");

    });

    $("#filter").click(function (){
        $("#all").hide()
        .slideDown(1000)
    });
    
    $("#clear").click(function (){
      $(".card").hide();

      console.log("Clear")
      alert("Trips will be removed")
    });

    
    
    
    $(document).ready(function(){
    //select the plants container and add html from our template 
   
    
    $("#removetwo").click(function (){
      $("#two").hide();
    });
    
    $("#removethree").click(function (){
      $("#three").hide();
    });
    
    //you have to call it only when ready/loaded
        loadTrip();
    });
    
    
    function loadTrip () {
        for (let i = 0; i < trip.length; i++) {
            console.log(trip[i]);
    
            $("#tripContainer").append($("#tripCardTemplate").html());
    
            let currentChild = $("#tripContainer").children().eq(i+1);
    
            $(currentChild).find(".card-img-top").attr('src','assets/' + trip[i].image);//if you make this trip into plant an image shows
    
            $(currentChild).find("#nameText").text(trip[i].name);
    
            $(currentChild).find("#priceText").text('R ' + trip[i].price);
    
            $(currentChild).find("#descriptionText").text(trip[i].description);
    
            $(currentChild).find("#descriptionText").hide();
            
            
        }
    }
    
    
    $("#tripContainer").on('click', '.card', function(){
    
      // Toggle the price & description text
      $(this).find("#priceText").toggle();
      $(this).find("#descriptionText").toggle();
    
      // Resize the image to fit the additional content
      $(this).find(".card-img-top").toggleClass("small");
    
      
    });
    
});

