import React from 'react';



const Todo = ({id,text, remove})=> {



    return (
        <div  className='Todo' id={id} data-testid={text}
        style={{            
            border: "3px solid black",
            margin: '5%',
            width:'25%'         
        }}
        >
            {text}
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;
