import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {

    const iState = {
        dims: '',
        color: ''
    }

    const [formData, setFormData] = useState(iState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
        [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData.dims, formData.color);
        setFormData(iState);
    }

    return (
        <form  onSubmit={handleSubmit} >
            <label  htmlFor="dims"> Height and Width </label>
            <input 
                id='dims'
                type='number'
                name='dims'
                placeholder='Height and Width'
                value= {formData.dims}
                onChange= {handleChange}
            /> 
            <label  htmlFor="color"> Color </label>
            <input 
                id='color'
                type='text'
                name='color'
                value= {formData.color}
                onChange= {handleChange}
            /> 
            <button>Add Box</button>
        </form  >
    )

}

export default NewBoxForm;