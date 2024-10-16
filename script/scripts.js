const todoList = JSON.parse(localStorage.getItem('todo-list')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1); 
                renderTodoList();"
                class="delete-button";
            >Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-output').innerHTML = todoListHTML;
    saveToStorage();

}

function addList() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateinputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateinputElement.value;

    todoList.push({
        name,
        dueDate
    });
    renderTodoList();
    inputElement.value = '';
}

function enterKey(event) {
    if (event.key === 'Enter') {
        addList();
    }
}

function saveToStorage() {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
}
