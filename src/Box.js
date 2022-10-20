import React from 'react';
import './Box.css'



const Box = ({color, height, width, id, remove})=> {



    return (
        <div  className='Box' id={id} data-testid={color}
        style={{            
            backgroundColor: color,
            minHeight:`3em`,
            minWidth:`3em`,
           maxHeight:`10em`,
           maxWidth:`10em`,
           width:`${width}em`,
           height:`${height}em`,

           
        }}
        >
            <button onClick={remove}>X</button>


        </div>
    )
}

export default Box;
