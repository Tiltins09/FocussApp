var seconds = 0;
var minutes = 0;

function timer() {
    if (seconds == 60) {
        minutes = minutes + 1;
        seconds = 0;
    }

    var timer = document.getElementById("timer");
    timer.innerHTML = "<h1>Time: " + minutes + "." + seconds + "</h1>";

    if (minutes == 25) {
        timer.innerHTML = "25 minutes have passed";
        clearInterval(mytimer);
        write(seconds, minutes);
        notification();
    }
    seconds = seconds + 1;
}

var mytimer = setInterval(timer, 1000);
mytimer;

function notification() {

    document.body.style.backgroundColor = "white";

    var interval = setInterval(changeColor, 1000);

    function changeColor() {
        var color = document.body.style.backgroundColor;
        if (color == "red") {
            document.body.style.backgroundColor = "white";
            color = "white";
        } else {
            document.body.style.backgroundColor = "red";
            color = "red";
        }
    }

}

function end() {
    window.location.reload();
}