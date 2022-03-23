import ListToDo from "../ListToDo"

const List = ({todos, deleteTodo, checkTodo}) => {
    return(
        <div>
            {todos.map((todo, todoIdx) => <ListToDo todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} key={todoIdx}/> )}
        </div>
    )
}

export default List