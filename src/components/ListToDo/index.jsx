import style from "./style.module.css"

const ListToDo = ({todo, deleteTodo, checkTodo}) => {
    return(
        <div className={style.container}>
            <div>
                <label style={{
                    textDecoration : todo.completed ? "line-through" : "none",
                    fontStyle: todo.completed ? "italic" : "normal",
                    color: todo.completed ? "gray" : "black"}}>

                    <input type="checkbox" 
                    onChange={() => {checkTodo(todo.id)}} 
                    checked={todo.completed}/>

                    {todo.title}
                </label>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}

export default ListToDo