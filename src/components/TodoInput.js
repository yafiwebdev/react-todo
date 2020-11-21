const TodoInput = props => (
	<input
		type="text" 
		name="add_todo" 
		className="TodoInput"
		onChange={props.updateInput}
		value={props.input}
	/>
);

export default TodoInput;