import React from 'react';
import $ from 'jquery';
import ReactDom from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import Todo from './todo/todo.js';
import TodoStore from './store/todoStore.js';
import {createTodo, saveTodo, editTodoBtn, saveTodoBtn, deleteTodo} from './actions/todoActions.js';
import allReducers  from './reducers/combineReducers.js';

require('./todo-container.scss');

const store = createStore(allReducers);

class TodoApp extends React.Component {
	
	editTodo(oldTodo) {
		actions.editTodo(oldTodo);
	}

	deleteTodo(index) {
		actions.deleteTodo(index);
	}

	getAllTodos() {
		this.setState({
			todos: TodoStore.getAllTodos()
		});
	}
	getInputTaskValue() {
		this.props.createTodo($(this.refs.todoinput).val()) 
	}

	render () {
		return (
				<div className='todo-container'>
					<input type='text' ref='todoinput'/>
					<input type='button' value='Add' onClick={this.getInputTaskValue.bind(this)} className='add-todo-btn'/>
					<div className="todos">
						{
							this.props.todos.map((todo) => <Todo text={todo.text} key={todo.id} index={todo.id} tododelete = {this.props.deleteTodo} todoEditable={todo.editable} saveTodo={this.props.saveTodo} saveTodoBtn={this.props.saveTodoBtn} editTodoBtn={this.props.editTodoBtn}/>)
						}
					</div>
				</div>
			)

	}
}
function mapStatesToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createTodo, saveTodo,editTodoBtn, saveTodoBtn, deleteTodo}, dispatch)
}

TodoApp = connect(mapStatesToProps, mapDispatchToProps)(TodoApp);

var todoAppDom = document.getElementById('todoApp');

ReactDom.render(<Provider store={store}><TodoApp/></Provider>, todoAppDom);
