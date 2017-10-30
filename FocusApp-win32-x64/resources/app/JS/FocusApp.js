// Starting time
var seconds = 0;
var minutes = 0;


// Timer function. Counts till 25 minutes then launches the notifications function

function timer() {
    var timer = document.getElementById("timer");

    if (seconds == 60) {
        minutes = minutes + 1;
        seconds = 0;
    }

    timer.innerHTML = "<h1>" + minutes + "." + seconds + "</h1>";

    var clock = document.getElementById("clock");
    var totaltime = 25 * 60;
    var onerotation = 360 / totaltime;

    clock.style.transform = "rotate(" + ((60 * minutes) + seconds) * onerotation + "deg)";

    if (minutes == 25) {
        timer.innerHTML = "25 minutes have passed";
        intervals.forEach(clearInterval);
        notification();
    }
    seconds = seconds + 1;
}

var intervals = [];

// Start the timer 

function initiateTimer(pos) {
    console.log(pos);
    if (pos == "start") {
        console.log("Resume called");
        var mytimer = setInterval(timer, 1000);
        mytimer;
        intervals.push(mytimer);
    } else if (pos == "end") {
        console.log("Pause called");
        clearInterval(mytimer);
    }
}


// Starts the blinking notification

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

// Either pauses or resumes the timer

function pause() {
    var button = document.getElementById("pause");
    if (button.innerText == "Pause") {
        intervals.forEach(clearInterval);
        initiateTimer("end");
        button.innerText = "Resume";
    } else if (button.innerText == "Resume" || button.innerText == "Start") {
        initiateTimer("start");
        button.innerText = "Pause";
    }
}

// Starts the timer when app is loaded

// initiateTimer("start");

// Restarts the clock, by reloading the window

function end() {
    window.location.reload();
}