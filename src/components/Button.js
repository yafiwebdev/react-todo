const Button = props => {

	let classes = ['Button'];
	let text;

	if(props.action === 'add') {
		classes.push('addBtn');
		text = '+';
	} else {
		classes.push('deleteBtn');
		text = '-';
	}

	return (
		<button 
			className={classes.join(' ')}
			onClick={props[props.action]}
		>
			{text}
		</button>
	);
}

export default Button;