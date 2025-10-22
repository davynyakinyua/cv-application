import React from 'react';


function Summary (){
    return (
        <div className="summary">
            <h3>Summary</h3>
            <label htmlFor="summary">Professional Summary</label>
            <br />
            <textarea name="summary" id="summary" required></textarea>
        </div>
    );
}


export default Summary