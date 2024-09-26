import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import './components/Todo.css';

class App extends React.Component {
	// you will need sa place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			tasks: []
		};
	}

	toggleCompleted = id => {
		console.log(id);
		const newTasks = this.state.tasks.map(task => {
			console.log(task.id);
			if (id === task.id) {
				return {
					...task,
					completed: !task.completed
				};
			} else {
				return task;
			}
		});
		console.log(newTasks);
		this.setState({ tasks: newTasks });
	};

	addTask = input => {
		const newTask = {
			task: input,
			id: Date.now(),
			completed: false
		};

		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
	};

	clearCompleted = () => {
		// console.log('clearCompleted works');
		const newList = this.state.tasks.filter(task => {
			return task.completed === false;
		});
		this.setState({ tasks: newList });
	};

	render() {
		return (
			<div>
				<h1>The Newest Todo App on the Block</h1>
				<TodoForm addTask={this.addTask} />
				<TodoList toggle={this.toggleCompleted} clearCompleted={this.clearCompleted} tasks={this.state.tasks} />
			</div>
		);
	}
}

export default App;
