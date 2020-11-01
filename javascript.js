$(function() {
    let date = moment().format("MMMM Do YYYY");
    $("#currentDay").append(date);

    let $input9AM = $("#input9AM");
    let $input10AM = $("#input10AM");
    let $input11AM = $("#input11AM");
    let $input12AM = $("#input12AM");
    let $input1PM = $("#input1PM");
    let $input2PM = $("#input2PM");
    let $input3PM = $("#input3PM");
    let $input4PM = $("#input4PM");
    let $input5PM = $("#input5PM");

    $("button").on("click", function () {
        localStorage.setItem("9AM", ($input9AM.val()));
        localStorage.setItem("10AM", ($input10AM.val()));
        localStorage.setItem("11AM", ($input11AM.val()));
        localStorage.setItem("12AM", ($input12AM.val()));
        localStorage.setItem("13PM", ($input1PM.val()));
        localStorage.setItem("14PM", ($input2PM.val()));
        localStorage.setItem("15PM", ($input3PM.val()));
        localStorage.setItem("16PM", ($input4PM.val()));
        localStorage.setItem("17PM", ($input5PM.val()));
    })

    $("#input9AM").append(localStorage.getItem("9AM"));
    $("#input10AM").append(localStorage.getItem("10AM"));
    $("#input11AM").append(localStorage.getItem("11AM"));
    $("#input12AM").append(localStorage.getItem("12AM"));
    $("#input1PM").append(localStorage.getItem("13PM"));
    $("#input2PM").append(localStorage.getItem("14PM"));
    $("#input3PM").append(localStorage.getItem("15PM"));
    $("#input4PM").append(localStorage.getItem("16PM"));
    $("#input5PM").append(localStorage.getItem("17PM"));
})
