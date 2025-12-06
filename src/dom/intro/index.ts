const counterDisplay = document.getElementById("counter") as HTMLHeadElement;
const addButton = document.getElementById("btn-add") as HTMLButtonElement;

let count = 0;

addButton.addEventListener("click", () => {
  count++;

  counterDisplay.innerText = count.toString();
});
