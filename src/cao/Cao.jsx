
function Cao({todo}){
    return(
        <div style={{display: "flex"}}>
        <input type='checkbox' />
        <li
        style={{color: "snow", textDecoration: todo.completed ? "line-through" : null }}>{todo.task}</li>
        <button>X</button>
        </div>
    )
}

export default Cao