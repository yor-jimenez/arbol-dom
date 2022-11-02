const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = '';
    // backticks (comillas invertidas)
    console.log(checkComplete());
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);d

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.appendChild(taskContent);
    // task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
};

console.log(btn);

// Arrow functions, funciones flecha o funciones anonimas
btn.addEventListener("click", createTask);
// listener
// click

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");

    return i;
};