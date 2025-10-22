import React from 'react';


function Experience (){
    return (
        <div className="experience">
            <h4>Experience</h4>
            <label htmlFor="company">Company Name:</label>
            <br />
            <input type="text" id="company" name="company" required />
            <br />
            <label htmlFor="position">Position</label>
            <br />
            <input type="text" id="position" name="position" required />
            <br />
            <label htmlFor="responsibilities">Responsibilities</label>
            <br />
            <input type="text" id="responsibilities" name="responsibilities" required />
            <br />
            <label htmlFor="start-date">Start Date:</label>
            <br />
            <input type="date" id="start-date" name="start-date" required />
            <br />
            <label htmlFor="end-date">End Date:</label>
            <br />
            <input type="date" id="end-date" name="end-date" required />
        </div>
    );
}

export default Experience