import React, {useState} from "react";
import Info from './info';
import './mainContainer.css'
import Education from './education'
import Experience from './experience'
import Buttons from './buttons'
import Summary from './summary'
import FormProvider from "../../context";




function MainComponent (){

    const [data, setData] = useState({});

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // data from context
        const formData = {
            username: e.target.username.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            summary: e.target.summary.value,
            institution: e.target.institution.value,
            title: e.target.title.value,
            schoolStartDate: e.target.start.value,
            schoolEndDate: e.target.end.value,
            company: e.target.company.value,
            position: e.target.position.value,
            responsibilities: e.target.responsibilities.value,
            jobStartDate: e.target.start.value,
            jobEndDate: e.target.end.value,
        };
        console.log('Form Data:', formData);
        setData(formData);
        console.log('Data:',data);
    }

    return (
        <div className="main-container">
            <FormProvider>
                <form method="post" onSubmit={handleSubmit} >
                    <Info />
                    <Summary />
                    <Education />
                    <Experience />
                    <Buttons />
                </form>
            </FormProvider>
            
            <div className="display">
                <h2> Your Resume</h2>
                <p>Name: {data.username || ''}</p>
                <p>Email: {data.email || ''}</p>
                <p>Phone No.: {data.phone || ''}</p>
                <h3>Professional Summary</h3>
                <p>{data.summary || ''}</p>
                <h4>Education</h4>
                <p>{data.institution || ''}</p>
                <p>{data.title || ''}</p>
                <p>Start Date: {data.schoolStartDate || ''}</p>
                <p>End Date: {data.schoolEndDate || ''}</p>


            </div>
        </div>
    );
}


export default MainComponent