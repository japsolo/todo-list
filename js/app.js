let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('.todo-list');

const deleteLi = e => {
	let liParent = e.currentTarget.parentElement.parentElement;
	ul.removeChild(liParent);
}

form.addEventListener('submit', e => {
	e.preventDefault();
	let task = input.value;
	if (input.value.length > 3) {
		input.classList.remove("error");
		ul.insertAdjacentHTML('beforeend', `
        <li>
            <p class="todo-list__text">${task}</p>
            <div class="todo-list_action-buttons">
               <button type="button" class="todo-list__delete"><i class="fas fa-trash-alt"></i></button>
               <button type="button" class="todo-list__check"><i class="fas fa-check-square"></i></button>
            </div>
        </li>
      `)
		input.value = '';

		let li = [...document.querySelectorAll('li')];

		for (let i = 0; i < li.length; i++) {
			let deleteBtn = li[i].querySelector('.todo-list__delete');
			let checkBtn = li[i].querySelector('.todo-list__check');
			deleteBtn.addEventListener('click', deleteLi);
		}
	} else {
		input.classList.add("error");
	}
})