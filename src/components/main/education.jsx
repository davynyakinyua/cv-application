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
            <input type="text" id="title" name="title" value={formData?.title || ''} onChange={handleChange} required />
            <br />
            <label htmlFor="school-start-date">start Date:</label>
            <br />
            <input type="date" id="school-start-date" name="school-start-date" value={formData?.start || ''} onChange={handleChange} required />
            <br />
            <label htmlFor="school-end-date">End Date</label>
            <br />
            <input type="date" id="end-date" name="school-end-date" value={formData?.end || ''} onChange={handleChange} required />
        </div>
    );
}


export default Education