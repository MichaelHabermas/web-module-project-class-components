import React from 'react';

// const TodoForm = props => {
class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			input: ''
		};
	}

	changeHandler = e => {
		this.setState({ input: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTask(this.state.input);
		this.setState({ input: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Task:
					<input
						onChange={this.changeHandler}
						value={this.state.input}
						type="text"
						name="item"
						placeholder="Go grocery shopping..."
					/>
				</label>
				<button>Add Task</button>
			</form>
		);
	}
}

export default TodoForm;
