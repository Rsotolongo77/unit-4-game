// established load logic to page before rendering page//

$(document).ready(function() {

    //create variables//
    var targetNumber = [];
    var counter = 0;
    var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];




    //sink into number to match html to render random number//

    $("#number-to-match").text(targetNumber);

    
    var singleRandom = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    alert(singleRandom);
     


    //create loop to select random number and asign it to a crystal//
        for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
    
    //make a class for crystal with jquery to hook into//    
        imageCrystal.addClass("crystal-image");
    
        //and attribute to crystal for image and random number assignment//
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
        //will render image with value (unseen) to page//
        $("#crystals").append(imageCrystal);
      }



    
    
    });

















<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>