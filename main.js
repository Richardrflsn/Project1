let input = document.querySelector('.input-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add btn disabled

input.addEventListener('keyup', () => {
    // Check if the input field is empty
    if (input.value.trim() !== "") {
    // Enable the add button
    addBtn.classList.add("active");
    } else {
    // Disable the add button
    addBtn.classList.remove("active");
    }
})

// Add a new item to the list
addBtn.addEventListener("click", () => {
    if (input.value.trim() !== 0) {
      // Create a new list item with the value of the input field
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `<p>${input.value}</p> <div class="item-button"> <i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-xmark"></i> </div>`;

      // Add a click event listener to the delete button
        newItem.querySelector(".fa-xmark").addEventListener("click", () => {
        // Remove the list item when the delete button is clicked
        newItem.remove();
        });

      // Add the new list item to the list
        tasks.appendChild(newItem);
    } else {
        alert("Please enter a task");
    }
});

