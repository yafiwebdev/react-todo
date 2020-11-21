import React, { Component } from 'react';

import TodoInput from '../components/TodoInput';
import Button from '../components/Button';

class TodoInputWrapper extends Component {

	state = {
		input: ''
	};

	updateInput = ({ target }) => {
		this.setState({
			input: target.value
		});
	}

	addTodo = () => {
		this.props.addTodo(this.state.input);
		this.setState({
			input: ''
		});
	}

	render() {
		return (
			<div className="TodoInputWrapper">
				<TodoInput 
					input={this.state.input}
					updateInput={this.updateInput}
				/>

				<Button 
					action="add" 
					add={this.addTodo} 
				/>
			</div>
		);
	}
};

export default TodoInputWrapper;