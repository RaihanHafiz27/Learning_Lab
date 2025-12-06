var counterDisplay = document.getElementById("counter");
var addButton = document.getElementById("btn-add");
var count = 0;
addButton.addEventListener("click", function () {
    count++;
    counterDisplay.innerText = count.toString();
});
