import React from 'react';

function ResponsibilitiesList ({responsibilities}){
    if(!responsibilities){
        return '';
    }

    // split the responsibilities into an array
    const responsibilitiesArray = responsibilities ? responsibilities.split(".") : [];

    return (
        <div className="response-display">
            <h3>Responsibilities</h3>
            <ul className="list-display">
                {responsibilitiesArray.map((responsibility, index) => (
                    <li key={index}>{responsibility.trim()}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResponsibilitiesList