export	function createTodo(text) {
	return {
		type:'CREATE_TODO',
		payload: text
	}
}

export  function saveTodo(todo) {
	return {
		type:'SAVE_TODO',
		payload: todo
	}
}

export  function editTodoBtn(click) {
	return {
		type:'EDIT_BTN-CLICK',
		payload: click
	}
}

export  function saveTodoBtn(click) {
	return {
		type:'SAVE_BTN-CLICK',
		payload: click
	}
}

export  function deleteTodo(todo) {
	return {
		type:'DELETE_TODO',
		payload: todo
	}
}