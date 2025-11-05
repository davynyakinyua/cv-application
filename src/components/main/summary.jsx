import React from 'react';
import { useFormContext } from '../../context';


function Summary (){
    const {formData, updateField} = useFormContext();

    const handleChange = (e) => {
        const {name, value} = e.target;

        updateField(name, value);
    }

    return (
        <div className="summary">
            <h3>Summary</h3>
            <label htmlFor="summary">Professional Summary</label>
            <br />
            <textarea name="summary" id="summary" value={formData?.summary || ''} onChange={handleChange} required></textarea>
        </div>
    );
}


export default Summary