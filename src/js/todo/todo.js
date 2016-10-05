import React from 'react';
import $ from 'jquery';
import {editTodo, editTodoBtn} from '../actions/todoActions.js';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import {todoReducer} from '../reducers/todoReducer';
require('./todo.scss');

class Todo extends React.Component {
	

	/*shouldComponentUpdate (nextProps, nextState) {
	    return nextState.editable !== this.props.editable;
	}*/

	displayEditField() {
		let selectedTodoDom = $(this.refs[this.props.index + 'todo-input-warapper']);
		selectedTodoDom.addClass('editable');
		this.props.editTodoBtn(this);
	}

	makeReadOnly() {
		let selectedTodoDom = $(this.refs[this.props.index + 'todo-input-warapper']);
		if(this.props.todoEditable) {
			selectedTodoDom.removeClass('editable');
			this.props.saveTodoBtn(this);
		}
	}

	componentDidUpdate(){
	 	if(this.props.todoEditable) {
	 		this.refs[this.props.index + 'todo-input'].focus(); 
	 	}
    }

    save() {
    	this.props.saveTodo(this);
    	this.makeReadOnly();
    }
    
	render() {
		let editSaveBtn;
		if(!this.props.todoEditable) {
			editSaveBtn = <input type='button' value='Edit'  onClick={this.displayEditField.bind(this)}/>;
		}
		else {
			editSaveBtn = <input type='button' value='Save'  onClick={this.save.bind(this)}/>
		}
		return (
			<div className='todo'>
				<div className='todo-input-wrapper' ref={this.props.index + 'todo-input-warapper' }>
					<input className='todo-input'  ref={this.props.index + 'todo-input' } readOnly={ this.props.todoEditable ? '' : 'readOnly' } type='text' defaultValue={this.props.text} ></input>
				</div>
				<div className='todo-actions-wrapper'>
					{editSaveBtn}
					<input type='button' value='Delete' onClick={this.props.tododelete.bind(null,this)}/>
				</div>
			</div>
		)
	}
}

function mapStatesToProps(state) {
		return {
			editable: state.editable
		}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({editTodo,editTodoBtn}, dispatch)
}

export default connect(mapStatesToProps, mapDispatchToProps)(Todo);