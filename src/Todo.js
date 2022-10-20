import React from 'react';
import EditTodoForm from './EditTodoForm';



const Todo = ({id,text, remove, edit})=> {



    return (
        <div  className='Todo' id={id} data-testid={text}
        style={{            
            border: "3px solid black",
            margin: '5%',
            width:'25%'         
        }}>
            {text}
            <button onClick={remove}>X</button>
            {/* <button onClick={edit}>Edit</button> */}
        </div>
    )
}

export default Todo;
