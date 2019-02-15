import React from 'react'
const Todos=({todos,delete_todo})=>{
    const todolist=todos.length?
    (
        todos.map(todo=>{
            return (
                <div className="items" key={todo.id}>
                    <span onClick={()=>{delete_todo(todo.id)}}>{todo.content}</span>
                </div>
            )
        
        })

    ):
    (
    <p className="center">Finished all task</p>
    )
    return(
        <div className="collection">
            {todolist}
        </div>
    )
    
}
export default Todos;