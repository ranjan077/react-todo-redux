function updateTodoState(todos, todo, key, value) {
	let newTodos  = todos.map(function(obj){
		if(obj.id === todo.props.index) {
			obj[key] = value;
		}
		return obj;
	});
	return newTodos;
}

export default function(state=null, action) {
	switch(action.type) {
		case 'CREATE_TODO' : {
			let todoText = action.payload.trim();
			if(todoText) {
				let todo =[{}]
				todo[0].id = Date.now();
				todo[0].text = todoText;
				return state.concat(todo);
			}
			break;
		}
		case 'SAVE_TODO': {
			let todo = action.payload;
			return updateTodoState(state, action.payload, 'text', todo.refs[todo.props.index + 'todo-input'].value);
		}
		break;
		case 'SAVE_BTN-CLICK': {
			let todo = action.payload;
			return updateTodoState(state, action.payload, 'editable', false);
		}
		break;
		case 'EDIT_BTN-CLICK': {
			let todo = action.payload;
			return updateTodoState(state, action.payload, 'editable', true);
		}
		break;
		case 'DELETE_TODO': {
			let todo = action.payload;
			let newTodos = state.filter(function(obj) {
				if (obj.id !== todo.props.index) {
					return todo;
				}
			});
			return newTodos;
		}
		break;
		default: return [
				{
					id: 1,
					text: 'Buy some milks',
					editable: false
				},
				{
					id: 2,
					text: 'Buy some chacolates',
					editable: false
				}
		]
	}
}