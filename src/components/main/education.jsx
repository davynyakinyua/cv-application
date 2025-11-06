import React from 'react';
import { useFormContext } from '../../context';


function Education (){
    const {formData, updateField} = useFormContext();

    const handleChange = (e) => {
        const {name, value} = e.target;

        updateField(name, value);
    }

    return (
        <div className="education">
            <h3>Education</h3>
            <label htmlFor="institution">Name of Institution:</label>
            <br />
            <input type="text" id="institution" name="institution" value={formData?.institution || ''} onChange={handleChange} required />
            <br />
            <label htmlFor="title">Title of Study:</label>
            <br />
            <input type="text" id="title" name="title" value={formData?.title || ''} onChange={handleChange} autoComplete='on' required />
            <br />
            <label htmlFor="schoolStartDate">start Date:</label>
            <br />
            <input type="date" id="schoolStartDate" name="schoolStartDate" value={formData?.schoolStartDate || ''} onChange={handleChange} required />
            <br />
            <label htmlFor="schoolEndDate">End Date</label>
            <br />
            <input type="date" id="schoolEndDate" name="schoolEndDate" value={formData?.schoolEndDate || ''} onChange={handleChange} required />
        </div>
    );
}


export default Education