var timePast = new Date("2025-01-08T14:20:30Z");
var TimeConverter = function (timestamp) {
    // Simulating time for NOW
    var now = new Date("2025-01-09T14:22:00Z").getTime();
    console.log("NOW : ".concat(now));
    console.log("PAST : ".concat(timestamp));
    var diffInMs = now - timestamp;
    console.log("Diff In ms : ".concat(diffInMs));
    var diffInSeconds = Math.floor(diffInMs / 1000);
    var diffInMinutes = Math.floor(diffInSeconds / 60);
    var diffInHours = Math.floor(diffInMinutes / 60);
    var diffInDays = Math.floor(diffInHours / 24);
    console.log("Diff In Sec : ".concat(diffInSeconds));
    console.log("Diff In Min : ".concat(diffInMinutes));
    console.log("Diff In Hour : ".concat(diffInHours));
    console.log("Diff In Days : ".concat(diffInDays));
    if (diffInSeconds < 60)
        return "Recently";
    if (diffInMinutes < 60)
        return "".concat(diffInMinutes, " Minutes Ago");
    if (diffInHours < 24)
        return "".concat(diffInHours, " Hours Ago");
    return "".concat(diffInDays, " Days Ago");
};
TimeConverter(timePast.getTime());
