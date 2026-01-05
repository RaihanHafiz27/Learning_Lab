var nameInput = document.getElementById("name");
var saveButton = document.getElementById("btn-save");
var displayName = document.getElementById("display-name");
saveButton.addEventListener("click", function () {
    var currentName = nameInput.value;
    displayName.innerText = currentName;
    nameInput.value = "";
});
