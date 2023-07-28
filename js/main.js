$(document).ready(function ()  {

    $("#checkout").click(function(){

        console.log("Payment");
        alert("Purchase Successful!");

    });

    $("#filter").click(function (){
        $("#all").hide()
        .slideDown(1000)
    });
    
});