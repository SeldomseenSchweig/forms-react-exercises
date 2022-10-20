import React, {useState} from 'react';





const NewTodoForm =({addTodo})=>{
    const INITIAL_STATE = {
        text:"",

    }
    const [formData, setFormData] = useState([INITIAL_STATE])
    const handleChange = (e) =>{
        const {name,value} = e.target;
    
        setFormData(formData =>( {
            ...formData,
            [name]:value
         }))
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        addTodo({ ...formData });
        setFormData(INITIAL_STATE)

    } 


    return (

        <form  >
            <label htmlFor='todo'> Todo</label>
            <input 
            id='todo'
            type='text'
            name='text'
            placeholder='todo'
            value={formData.text}
            onChange={handleChange}
            />

          <button onClick={handleSubmit}>Submit</button> 
        </form>
    )



}

export default NewTodoForm;