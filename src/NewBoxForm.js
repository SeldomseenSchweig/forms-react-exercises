import React, {useState} from 'react';





const NewBoxForm =({addBox})=>{
    const INITIAL_STATE = {
        color:"",
        height:"",
        width:""
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
        addBox({ ...formData });
        setFormData(INITIAL_STATE)

    } 


    return (

        <form onSubmit={handleSubmit} >
            <label htmlFor='color'> Color</label>
            <input 
            id='color'
            name='color'
            type='text'
            placeholder='Color'
            value={formData.color}
            onChange={handleChange}
            />
            <label htmlFor='height'> Box height</label>
            <input 
            type="number"
            name='height'
            onChange={handleChange}
            value={formData.height}
            id="height"

            />
        <label htmlFor='width'> width </label>
            <input 
            type="number"
            name='width'
            onChange={handleChange}
            value={formData.width}
            id='width'
            />
          <button>Submit</button>  
        </form>
    )



}

export default NewBoxForm;