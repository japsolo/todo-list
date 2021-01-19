const form = document.querySelector('.todo-form');
const taskInput = document.querySelector('.todo-form__control');
const toDoList = document.querySelector('.todo-list');

const deleteTask = e => {
	let liTag = e.currentTarget.parentElement.parentElement;
	toDoList.removeChild(liTag);
}

const checkTask = e => {
	let grantParent = e.currentTarget.parentElement.parentElement;
	grantParent.classList.toggle('checked');
}

const taskHandler = () => {
	let taskText = taskInput.value;

	if (taskText.length > 3) {
		let htmlContent = `
			<li>
				<p class="todo-list__text">${taskText}</p>
				<div class="todo-list_action-buttons">
					<button type="button" class="todo-list__delete"><i class="fas fa-trash-alt"></i></button>
					<button type="button" class="todo-list__check"><i class="fas fa-check-square"></i></button>
				</div>
			</li>
		`;

		toDoList.insertAdjacentHTML('beforeend', htmlContent);
		taskInput.classList.remove('error');
		taskInput.value = '';

		let allTask = [...toDoList.querySelectorAll('li')];
		
		allTask.forEach(oneTask => {
			let deleteButton = oneTask.querySelector('.todo-list__delete');
			let checkButton = oneTask.querySelector('.todo-list__check');
			deleteButton.addEventListener('click', deleteTask);
			checkButton.addEventListener('click', checkTask);
		});
	} else {
		taskInput.classList.add('error');
	}
}

const addTask = e => {
	e.preventDefault();
	taskHandler();
}

form.addEventListener('submit', addTask);

taskInput.addEventListener('blur', e => {
	let input = e.currentTarget;
	input.classList.remove('error');
})