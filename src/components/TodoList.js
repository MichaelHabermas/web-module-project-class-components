// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
	return (
		<>
			<h3>Current Tasks:</h3>
			{props.tasks.map((item, i) => {
				return <Todo key={i} item={item} toggle={props.toggle} />;
			})}
			<button onClick={props.clearCompleted}>Clear Completed Tasks</button>
		</>
	);
};

export default TodoList;
