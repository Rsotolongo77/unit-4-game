
$(document).ready(function () {
    //create variables//
    var wins = 0;
    var losses = 0;
    var counter = 0;


    //generate random number for user to match//
    var targetNumber = [];
    function generateTargetNumber(min, max) {
        min = 19;
        max = 120
        targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
    }






    //Hook into html to render random number results and update accordingly//
    function updatedisplay() {
        $("#number-to-match").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#current-user-score").text(counter);
    }



    function resetScores() {
        counter = 0;
        generateTargetNumber();
    };



    //generate random number from 1-12 and assign 4 into new array//
    function generateNewGame() {
        $("#crystals").empty();
        var gemArray = []
        while (gemArray.length < 4) {
            var r = Math.floor(Math.random() * 11) + 1;
            if (gemArray.indexOf(r) === -1) { gemArray.push(r) };
        }
        console.log(gemArray);




        //create for loop that will assign each crystal a random number from new array of 4//
        for (var i = 0; i < gemArray.length; i++) {
            //crystal img tag created//
            var imageCrystal = $("<img>");
            //each new crystal tag is also assigned a new class//
            imageCrystal.addClass("crystal-image crystalStyle");
            //actual image is attached to tag//
            imageCrystal.attr("src", "assets/images/diamond.png");
            //random value from array is assigned//
            imageCrystal.attr("data-crystalvalue", gemArray[i]);
            //attributes are combined and then rendered to page via ID//
            $("#crystals").append(imageCrystal);
        }

        generateTargetNumber();
        updatedisplay();

    }

    generateNewGame();


    //restart game link created//
    $("#restart").on("click", function () {

        resetScores();
        updatedisplay();
        generateNewGame();



    });





    //initiate on-click for desired process once image is clicked//
    $(document).on("click", ".crystal-image", function () {


        //puts in data value appended to image into integer form. applies new variable holding this integer//
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        //adds integer value on crystal clicked to counter which is then displayed on screen//
        counter += crystalValue;
        console.log(counter);
        updatedisplay();



        //enter conditionals to determine game outcome//
        if (counter == targetNumber) {
            wins++;
            updatedisplay();
            $(".crystal-image").removeClass(".crystal-image");






        }


        //enter conditionals to determine game outcome//
        else if (counter >= targetNumber) {
            losses++
            updatedisplay();
            $(".crystal-image").removeClass("crystal-image");



        }




    });
});





