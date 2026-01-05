const nameInput = document.getElementById("name") as HTMLInputElement;
const saveButton = document.getElementById("btn-save") as HTMLButtonElement;
const displayName = document.getElementById("display-name") as HTMLElement;

saveButton.addEventListener("click", () => {
  const currentName = nameInput.value;

  displayName.innerText = currentName;

  nameInput.value = "";
});
