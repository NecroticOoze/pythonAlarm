$(document).ready(function () {
    setInterval(myTimer, 1000);
    updateOptions();
});

function myTimer() {
    var d = new Date();
    $("#currentTime").html(d.toLocaleTimeString());
}

function updateOptions() {
    $match = $("#hoursDropdown");
    for (var i = 0; i <= 24; i++) {
        $match.append(`<option value=${i}>${i}</option>`)
    }
    $match = $("#minutesDropdown");
    for (var i = 0; i <= 60; i++) {
        $match.append(`<option value=${i}>${i}</option>`);
    }
}

$("#startAlarm").click(function () {
    if ($("#hoursDropdown").val() == "Hours to wait" || $("#minutesDropdown").val() == "Minutes to wait") {
        //Do nothing
    } else {
        alert("Starting alarm");
        let hours = $("#hoursDropdown").val();
        let minutes = $("#minutesDropdown").val();
        hours = (hours * 60) * 60;
        minutes = minutes * 60;
        total = (hours + minutes) * 1000;
        total = parseInt(total);
        alert(`You'll be waiting ${total} seconds`);
        setTimeout(function() {activateAlarm()}, total);
    }
});

function activateAlarm() {
    $("body").append(`<audio id="myAlarm" autoplay loop>
    <source src="russianMusic.mp3">
</audio>`);
    setTimeout(function() {mathmatics();},1000);
}

function mathmatics() {
    let num1 = getWholeNumber();
    let num2 = getWholeNumber();
    let num3 = getWholeNumber();
    let num4 = getWholeNumber();
    let answer1 = num1 + num2;
    let answer2 = num3 + num4;
    let x = parseInt(prompt(`${num1} + ${num2}`));
    if (x != answer1) {
        mathmatics();
    } else {
        let x = parseInt(prompt(`${num3} + ${num4}`));
        if (x != answer2) {
            mathmatics();
        } else {
            $("#myAlarm").remove();
        }
    }
}

function getWholeNumber() {
    return Math.floor(Math.random() * 100);
}