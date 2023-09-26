// JavaScript-код для збереження завдань у Local Storage
function saveTasks()
{
    var taskList = document.getElementById("taskList");
    var tasks = [];
    for (var i = 0; i < taskList.children.length; i++)
    {
        tasks.push(taskList.children[i].textContent);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// JavaScript-код для відновлення завдань з Local Storage
function loadTasks() {
    var taskList = document.getElementById("taskList");
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        var tasks = JSON.parse(savedTasks);
        for (var i = 0; i < tasks.length; i++) {
            var taskItem = document.createElement("li");

            // Видалити "Delete" текст, якщо він присутній у завданні
            var taskText = tasks[i].replace("Delete", "");

            taskItem.textContent = taskText;

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "button-delete-task";
            deleteButton.onclick = function (event) {
                var listItem = event.target.parentElement;
                taskList.removeChild(listItem);
                saveTasks(); // При видаленні завдання оновити Local Storage
            };

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        }
    }
}



// Викликати функцію loadTasks() при завантаженні сторінки
window.onload = loadTasks;


// Зберегти завдання при додаванні або видаленні
document.getElementById("taskInput").addEventListener("input", saveTasks);
document.getElementById("taskList").addEventListener("input", saveTasks);
