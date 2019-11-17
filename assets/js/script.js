
$(document).ready(function () {
    // ================VARIABLES================
    var infoCol = $(".info-col");
    var saveButton = $(".save-button");
    var userInput = $(".user-input");
    let data;

    // ================FUNCTIONS================
    console.log("The current hour is " + moment().hour());
    $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    setInterval(function () {
        $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        changeColor();
    }, 1000);

    // Function to pull results from localStorage
    for (var i = 9; i <= 17; i++){
        $('#' + i).val(localStorage.getItem("hour " + i));
    }

    // Function to use save button to save textarea value to localStorage
    saveButton.click(function () {
        event.preventDefault();
        // test to see button was pressed
        console.log("I was pressed");

        var a = this;
        // console.log(a);
        // console.log(a.previousElementSibling);
        console.log(a.previousElementSibling.firstElementChild);
        console.log($(a).prev());
        // console.log($(results))
        var results = a.previousElementSibling.firstElementChild;
        console.log(results);
        console.log($(results));
        data = $(results).val().trim();
        console.log(data);

        console.log(results.id);
        var time = results.id;
        console.log("hour " + time);

        localStorage.setItem("hour " + time, data);

    });

    //Function to change textarea color depending on hour of the day
    function changeColor(){

        for (i=9; i<=17; i++){
            var currentTime = moment().hour();

            if(currentTime === i){
                $("." + i).attr("style", "background-color: red");
            }

            else if(currentTime > i){
                $("." + i).attr("style", "background-color: lightgray");
            }
        }
    }

    changeColor();

});
