let d = new Date();

logTime = function logTime() {
    let time = d.toLocaleTimeString();
    {console.log(time)};
}

setInterval(logTime, 1000);