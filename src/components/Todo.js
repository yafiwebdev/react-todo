import Button from './Button';

const Todo = props => {
	
	let classes = ['Todo'];

	if(props.todo.completed) {
		classes.push('completed');
	} else {
		classes.push('incomplete');
	}

	return (
		<li className="TodoWrapper">
			<div 
				className={classes.join(' ')}
				onClick={() => props.toggleStatus(props.todo.id)}
			>
				{props.todo.text}
			</div>
			<Button
				action="delete"
				delete={() => props.delete(props.todo.id)}
			/>
		</li>
	);
};

export default Todo;