var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');

var index = 0;

function write(seconds, minutes) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    month = (month < 10 ? "0" : "") + month;
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    var today = year + "." + month + "." + day;
    fs.readdir('./logs', function(err, files) {
        files.forEach(function(file, index) {
            if (file == today + '.txt') {
                index++;
            };
        });
        console.log(index);
        if (index < 1) {
            fs.writeFile(__dirname + "\\logs\\" + today + ".txt", content(), function(err) {
                if (err) {
                    alert("Time wasn't added to log!");
                }
            })
        } else {
            var exContent;
            fs.readFile(__dirname + "\\logs\\" + today + ".txt", 'utf-8', function(err, data) {
                if (err) {
                    alert("Couldn't read existing file");
                    return;
                }
                exContent = data;
            })
            fs.writeFile(__dirname + "\\logs\\" + today + ".txt", content(exContent), function(err) {
                if (err) {
                    alert("Couldn't write time to log!");
                }
            });
        };
    });


    function content(exContent) {
        if (exContent) {
            console.log(exContent);
            exContent.push(["Time", minutes + "." + seconds]);
            time = exContent;
        } else {
            var time = ["Time", minutes + "." + seconds]
        }
        return time;
    }
}