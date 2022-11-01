const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const task = document.querySelector("[data-task]");
    const value = input.value;
    // backticks (comillas invertidas)
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    console.log(content);
}

console.log(btn);

// Arrow functions, funciones flecha o funciones anonimas
btn/addEventListener("click", createTask);
// listener
// click

