import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center'>Todo's List</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo) => {
          return(
              <>
                <Todo todo = {todo} key={todo.sno} onDelete={props.onDelete}/> <hr />
              </>
            )
      })
    }
     
    </div> 
  )
}

export default Todos
