// 1. Select the button (Single element)
var btn = document.querySelector("#highlight-btn");
// 2. Select ALL tasks (NodeList)
var tasks = document.querySelectorAll(".task");
// 3. Add Listener
if (btn) {
    btn.addEventListener("click", function () {
        // 4. Loop through the NodeList
        tasks.forEach(function (task) {
            // 5. Add the CSS class
            task.classList.add("bg-yellow");
        });
    });
}
