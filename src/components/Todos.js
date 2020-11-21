import Todo from './Todo';

const Todos = props => (
	<div className="Todos">
		<ul>
			{props.todos.map( (todo, id) =>
				<Todo 
					todo={{...todo, id}}
					toggleStatus={props.toggleStatus}
					delete={props.deleteTodo}
				/>
			)}
		</ul>
	</div>
);

export default Todos;