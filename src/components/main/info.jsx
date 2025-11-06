import React from 'react'
import { useFormContext } from '../../context';

function Info (){
    const {formData, updateField} = useFormContext();

    const handleChange = (e) => {
        // Destructure the name and value from event target
        const {name, value} = e.target;

        updateField(name, value);
    }
    return (
        <div className="info">
            <h2>Personal Details</h2>
            <label htmlFor="username">Name:</label>
            <br />
            <input type="text" id="username" name="username" value={formData?.username || ''} onChange={handleChange} autoComplete='given-name' required />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" value={formData?.email || ''} onChange={handleChange} autoComplete='email' required/>
            <br />
            <label htmlFor="phone">Phone no:</label>
            <br />
            <input type="tel" id="phone" name="phone" value={formData?.phone || ''} onChange={handleChange} autoComplete='tel' required/>
        </div>
    );
}


export default Info