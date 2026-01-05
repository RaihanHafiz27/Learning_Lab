// 1. Select the button (Single element)
const btn = document.querySelector<HTMLButtonElement>("#highlight-btn");

// 2. Select ALL tasks (NodeList)
const tasks = document.querySelectorAll<HTMLLIElement>(".task");

// 3. Add Listener
if (btn) {
  btn.addEventListener("click", () => {
    // 4. Loop through the NodeList
    tasks.forEach((task) => {
      // 5. Add the CSS class
      task.classList.add("bg-blue");
    });
  });
}
