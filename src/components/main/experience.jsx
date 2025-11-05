import React from 'react';
import { useFormContext } from '../../context';


function Experience (){
    const {formData, updateField} = useFormContext();

    const handleChange = (e) => {
        const {name, value} = e.target;

        updateField(name, value);
    }
    return (
        <div className="experience">
            <h4>Experience</h4>
            <label htmlFor="company">Company Name:</label>
            <br />
            <input type="text" id="company" name="company" value={formData?.company || ''} onChange={handleChange} required />
            <br />
            <label htmlFor="position">Position</label>
            <br />
            <input type="text" id="position" name="position" value={formData?.position || ''} onChange={handleChange} required />
            <br />
            <label htmlFor="responsibilities">Responsibilities</label>
            <br />
            <textarea id="responsibilities" name="responsibilities" value={formData?.responsibilities || ''} onChange={handleChange} required ></textarea>
            <br />
            <label htmlFor="job-start">Start Date:</label>
            <br />
            <input type="date" id="job-start" name="job-start" value={formData?.start || ''} onChange={handleChange} required />
            <br />
            <label htmlFor="job-end">End Date:</label>
            <br />
            <input type="date" id="job-end" name="job-end" value={formData?.end || ''} onChange={handleChange} required />
        </div>
    );
}

export default Experience