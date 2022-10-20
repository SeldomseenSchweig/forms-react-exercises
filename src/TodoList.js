import React, {useState} from 'react';
import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid'




const TodoList =()=>{
    const INITIAL_STATE = [
        { 
            id:2,
            text:"Wash the car"
        },
        { 
            id:1,
            text: 'Clean the gutters',

        }
    ]
    const [Todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo)=>{
        setTodos(Todos =>([...Todos,{...newTodo, id:uuid()} ]));
    }
    const remove = (e) => {
        
        const id = e.target.parentNode.id;
                    
             setTodos((Todos)=>{ 
                const TodosCopy = [...Todos]
                const indexOfObject = TodosCopy.findIndex( object => object.id === id )
                TodosCopy.splice(indexOfObject, 1);
                return [...TodosCopy]
                



             } )
        }
        
    return (

        <div>
            <NewTodoForm addTodo={addTodo} />
            <h1> Todo List</h1>
            <div>
            
            { Todos.map(({id,text}) =><Todo id={id} text={text} key={id} remove={remove}/> )}
            </div>

            
        </div>
    )



}

export default TodoList;