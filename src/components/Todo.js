import React from 'react';
import './Todo.css';

const Todo = props => {
	const handleClick = () => {
		props.toggle(props.item.id);
	};

	return (
		<>
			<div onClick={handleClick} className={props.item.completed ? 'completed' : ''}>
				<h4>{props.item.task}</h4>
			</div>
		</>
	);
};

export default Todo;
