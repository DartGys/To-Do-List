// JavaScript-код для додавання завдань та видалення їх
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Додати кнопку "Видалити" до кожного завдання
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "button-delete-task"
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
            saveTasks(); // При видаленні завдання оновити Local Storage
        };

        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";

        saveTasks(); // При додаванні завдання оновити Local Storage
    }
}

// JavaScript-код для очищення списку ToDo
function clearTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Видалимо всі дочірні елементи у списку
    localStorage.removeItem("tasks"); // Видалимо дані з Local Storage
}

// Додайте кнопку або елемент у вашу сторінку, який викличе функцію clearTasks()
var clearButton = document.createElement("button");
clearButton.textContent = "Clear All Tasks";
clearButton.className = "button-delete"
clearButton.onclick = clearTasks;
document.body.appendChild(clearButton); // Додайте кнопку на сторінку