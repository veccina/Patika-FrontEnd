document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("task");
    const addButton = document.getElementById("liveToastBtn");
    const list = document.getElementById("list");
    loadTasks();
  
    addButton.onclick = addTask;
    inputField.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();  
        addTask();
      }
    });
  
    list.addEventListener("click", (event) => {
      if (event.target.tagName === 'LI' && event.target !== event.target.querySelector(".delete")) {
        event.target.classList.toggle('checked');
        saveTasks();
      } else if (event.target.classList.contains("delete")) {
        const listItem = event.target.parentElement;
        listItem.className = 'leave'; 
        setTimeout(() => {
          listItem.remove();
          saveTasks();
        }, 300); 
      }
    });
  });
  
  function addTask() {
    const task = document.getElementById("task").value.trim();
    if (task === "") {
      showToast("error", "Listeye boş ekleme yapamazsınız!");
    } else {
      const listItem = createTaskElement(task);
      document.getElementById("list").appendChild(listItem);
      saveTasks();
      showToast("success", "Listeye eklendi.");
      document.getElementById("task").value = ""; 
    }
  }
  
  function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.className = 'enter'; 
    setTimeout(() => listItem.className = '', 300); 
  
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("fas", "fa-times", "delete");
    deleteButton.style.cursor = "pointer";
    deleteButton.style.position = "absolute";
    deleteButton.style.right = "10px";
    deleteButton.style.top = "50%";
    deleteButton.style.transform = "translateY(-50%)";
    deleteButton.style.color = "red";
    deleteButton.style.fontSize = "20px";
    listItem.appendChild(deleteButton);
  
    return listItem;
  }
  
  function showToast(type, message) {
    const toast = document.querySelector(`.toast.${type}`);
    toast.querySelector(".toast-body").textContent = message;
    $(toast).toast("show");
  }
  
  function saveTasks() {
    const tasks = Array.from(document.querySelectorAll("#list li")).map(
      (li) => ({
        task: li.childNodes[0].nodeValue.trim(),
        completed: li.classList.contains("checked")
      })
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((item) => {
      const listItem = createTaskElement(item.task);
      if (item.completed) {
        listItem.classList.add("checked");
      }
      document.getElementById("list").appendChild(listItem);
    });
  }
  