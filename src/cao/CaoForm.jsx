import React from 'react';
import { useState } from 'react';
import { uuid } from 'uuid';


export default function CaoForm({addTodo}){
    const[todo,setTodo]=useState({
        id:"",
        task:"",
        completed: false
    })

    const handSub = (e)=>{
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({ ...todo, id: uuid.v4() })
            //reset task input
            setTodo({ ...todo,task:""})
        }
    }

    const handChange =(e)=>{
        setTodo({ ...todo, task: e.target.value})
    }
    return (
        <form className='container' onSubmit={handSub}>
            <input type='text' placeholder='toDo' value={todo} name='task' onChange={handChange} />
            <button type="submit">Submit</button>
               
        </form>
    )
}