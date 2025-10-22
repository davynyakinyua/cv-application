import React from 'react';


function Education (){
    return (
        <div className="education">
            <h3>Education</h3>
            <label htmlFor="institution">Name of Institution:</label>
            <br />
            <input type="text" id="institution" name="institution" required />
            <br />
            <label htmlFor="title">Title of Study:</label>
            <br />
            <input type="text" id="title" name="title" required />
            <br />
            <label htmlFor="start-date">start Date:</label>
            <br />
            <input type="date" id="start-date" name="start-date" required />
            <br />
            <label htmlFor="end-date">End Date</label>
            <br />
            <input type="date" id="end-date" name="end-date" required />
        </div>
    );
}


export default Education