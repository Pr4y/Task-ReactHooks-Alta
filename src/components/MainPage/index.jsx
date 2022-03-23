import { useState } from "react"

import style from "./style.module.css"

import Form from "../Form";
import List from "../List";

const MainPage = () => {
    const [data, setData] = useState([
        {
          id: 1,
          title: "Mengerjakan exercise",
          completed: true
        },
        {
          id: 2,
          title: "Mengerjakan assignment",
          completed: false
        },
    ])
    
    const addTodo = (newEntry) => {
        let counterData = (data.length !== 0) ? (data[data.length - 1].id) : 0;  
        const newTodo = {id: counterData + 1, ...newEntry}           
    
        setData([...data, newTodo])
    }
    
    const deleteTodo = (id) => {
        const newListToDo  = data.filter((item) => item.id !== id)
        
        setData(newListToDo)
    }
    
    const checkTodo = (id) => {
        const newStatus = data.map((data) => {
            if(data.id === id){
                return {...data, completed: !data.completed}
            }
            else{
                return data
            }
        })
        setData(newStatus)
    }
    
    return (
        <div className={style.container}>
          <h1>To-Do List</h1>
          <Form addTodo={addTodo}/>
          <List todos={data} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
        </div>
    );
}

export default MainPage