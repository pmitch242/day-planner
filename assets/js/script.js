
$(document).ready(function () {
    // ================VARIABLES================
    var saveButton = $(".save-button");
    let data;

    // Set these values as soon as the page loads
    // =========================================
    console.log("The current hour is " + moment().hour());

    //This prevents the from waiting one second before setting these values
    $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    changeColor();
    // =========================================

    // ================FUNCTIONS================

    //Run this function every second
    setInterval(function () {
        // Update time
        $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        // Check to see if textarea column color should be changed
        changeColor();
    }, 1000);

    // Function to pull results from localStorage
    for (var i = 9; i <= 17; i++) {
        $('#' + i).val(localStorage.getItem("hour " + i));
    }

    // Function to use save button to save textarea value to localStorage
    saveButton.click(function () {
        event.preventDefault();

        // test to see button was pressed
        console.log("I was pressed");

        //retrieve user input
        var a = this;
        var results = a.previousElementSibling.firstElementChild;
        console.log($(results));
        data = $(results).val().trim();
        console.log(data);

        //identify time row
        var time = results.id;
        console.log("hour " + time);

        //save key and user input to localStorage
        localStorage.setItem("hour " + time, data);

    });

    //Function to change textarea color depending on hour of the day
    function changeColor() {

        for (i = 9; i <= 17; i++) {
            var currentTime = moment().hour();

            //Present
            if (currentTime === i) {
                $("." + i).attr("style", "background-color: red");
            }

            //Past
            else if (currentTime > i) {
                $("." + i).attr("style", "background-color: lightgray");
            }
        }
    }

});
