import Todo from './Todo';

const Todos = props => (
	<div className="Todos">
		{props.todos.length > 0
			? 	<ul>
					{props.todos.map( (todo, id) =>
						<Todo 
							todo={{...todo, id}}
							toggleStatus={props.toggleStatus}
							delete={props.deleteTodo}
							key={id}
						/>
					)}
				</ul>
			: <div className="alert">Nothing to do!</div>
		}
	</div>
);

export default Todos;