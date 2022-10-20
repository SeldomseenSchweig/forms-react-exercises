import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid'




const BoxList =()=>{
    const INITIAL_STATE = [
        { 
            id:uuid(),
            color: 'red',
            height:10,
            width:10
        },
        { 
            id:uuid(),
            color: 'blue',
            height:10,
            width:10
        }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox)=>{
        setBoxes(boxes =>([...boxes,{...newBox, id:uuid()} ]));
    }
    const remove = (e) => {
        
        const id = e.target.parentNode.id;
                    
             setBoxes((boxes)=>{ 
                const boxesCopy = [...boxes]
                const indexOfObject = boxesCopy.findIndex( object => object.id === id )
                const final = boxesCopy.splice(indexOfObject, 1);
                return [...boxesCopy]
                



             } )
        }
        
    



    return (

        <div>
            <NewBoxForm addBox={addBox} />
            <h1> Box List</h1>
            <div>
            
            { boxes.map(({id,color,height,width}) =><Box id={id} color={color} height={height} width={width} key={id} remove={remove}/> )}
            </div>

            
        </div>
    )



}

export default BoxList;