
import Cao from './Cao';

export default function CaoList (todos){

return(
    <ul>
    {todos.map(todo =>(<Cao  key={todo.id} todo={todo} />))}
</ul>
)
}