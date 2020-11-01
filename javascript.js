//this runs the function once the page is loaded
$(function() {
    //this section set the time format and display it under the header
    let date = moment().format("MMMM Do YYYY");
    $("#currentDay").append(date);

    //this set the time to military time format
    let currentTime = parseInt(moment().format("HH"))

    //variables needed for the interaction between html and js
    let $input9AM = $("#input9AM");
    let $input10AM = $("#input10AM");
    let $input11AM = $("#input11AM");
    let $input12AM = $("#input12AM");
    let $input1PM = $("#input1PM");
    let $input2PM = $("#input2PM");
    let $input3PM = $("#input3PM");
    let $input4PM = $("#input4PM");
    let $input5PM = $("#input5PM");

    //this section sets items to the local storage when the button is clicked
    $("button").on("click", function () {
        localStorage.setItem("9AM", ($input9AM.val()));
        localStorage.setItem("10AM", ($input10AM.val()));
        localStorage.setItem("11AM", ($input11AM.val()));
        localStorage.setItem("12AM", ($input12AM.val()));
        localStorage.setItem("13PM", ($input1PM.val()));
        localStorage.setItem("14PM", ($input2PM.val()));
        localStorage.setItem("15PM", ($input3PM.val()));
        localStorage.setItem("16PM", ($input4PM.val()));
        localStorage.setItem("17PM", ($input5PM.val()))
    })

    //this section retrieves the content from the local storage and displays it on the page
    $("#input9AM").append(localStorage.getItem("9AM"));
    $("#input10AM").append(localStorage.getItem("10AM"));
    $("#input11AM").append(localStorage.getItem("11AM"));
    $("#input12AM").append(localStorage.getItem("12AM"));
    $("#input1PM").append(localStorage.getItem("13PM"));
    $("#input2PM").append(localStorage.getItem("14PM"));
    $("#input3PM").append(localStorage.getItem("15PM"));
    $("#input4PM").append(localStorage.getItem("16PM"));
    $("#input5PM").append(localStorage.getItem("17PM"));

    //this area color codes the boxes based on current time, whether past, present or future
    $("textarea").each(function () {
        let name = parseInt($(this).attr("name"));
        if (name < currentTime) {
            $(this).addClass("past");
        }

        if (name > currentTime) {
            $(this).addClass("future")
        }

        if (name === currentTime) {
            $(this).addClass("present")
        }
    })
})

