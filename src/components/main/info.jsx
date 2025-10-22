import React from 'react'


function Info (){
    return (
        <div className="info">
            <h2>Personal Details</h2>
            <label htmlFor="username">Name:</label>
            <br />
            <input type="text" id="username" name="username" required />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required/>
            <br />
            <label htmlFor="phone">Phone no:</label>
            <br />
            <input type="number" required/>
        </div>
    );
}


export default Info