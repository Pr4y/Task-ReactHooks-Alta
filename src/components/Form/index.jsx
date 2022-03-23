import { useState } from "react"

import styles from "./style.module.css"

const Form = ({addTodo}) => {
    const [input, setinput] = useState({
        title: "",
        completed: false
    })
    
    const onChange = (e) => {
        setinput({
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputNotEmpty = input.title
    
        if(inputNotEmpty){
            const newEntry = {
                title: input.title,
                completed: false
            }
            addTodo(newEntry);
            setinput({
                title: "",
                completed: false
            })
        }
        else{
            alert("Data masih ada yang kosong!");
        }
    }

    return(
        <div className={styles.container}>
            <input type="text" placeholder="Add your To-Do List Here..." value={input.title} name="title" onChange={(e) => {onChange(e)}} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form