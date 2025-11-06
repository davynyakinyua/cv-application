import React, {useState} from "react";
import Info from './info';
import './mainContainer.css'
import Education from './education'
import Experience from './experience'
import Buttons from './buttons'
import Summary from './summary'
import FormProvider from "../../context";
import ResponsibilitiesList from "./responsibilities";




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
            schoolStartDate: e.target.schoolStartDate.value,
            schoolEndDate: e.target.schoolEndDate.value,
            company: e.target.company.value,
            position: e.target.position.value,
            responsibilities: e.target.responsibilities.value,
            jobStartDate: e.target.jobStart.value,
            jobEndDate: e.target.jobEnd.value,
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
                <div className="output">
                    <div className="title-display">
                        <h2>{data.username ? "Resume" : ''}</h2>
                        <p>{data.username || ''}</p>
                    </div>
                    <div className="details">
                        <p>{data.email?"Email:" : ''} {data.email || ''}</p>
                        <p>{data.phone?'Phone No.:' : ''} {data.phone || ''}</p>
                    </div>
                    <div className="summary">
                        <h3>{data.summary?'Professional Summary':''}</h3>
                        <p>{data.summary || ''}</p>
                    </div>
                    <div className="edu-display">
                        <h4>{data.title?'Education':''}</h4>
                        <p>{data.title || ''}</p>
                        <div className="timeline">
                            <p>{data.institution || ''}</p>
                            <p>{data.schoolStartDate?'Start Date:':''} {data.schoolStartDate || ''}</p>
                            <p>{data.schoolEndDate?'End Date:':''} {data.schoolEndDate || ''}</p>
                        </div>
                    </div>
                    <div className="expe-display">
                        <h5>{data.position?'Experience':''}</h5>
                        <p>{data.position || ''}</p>
                        <div className="timeline">
                            <p>{data.company || ''}</p>
                            <p>{data.jobStartDate?'Start Date:':''} {data.jobStartDate || ''}</p>
                            <p>{data.jobEnd?'End Date:':''} {data.jobEndDate || ''}</p>
                        </div>
                        <ResponsibilitiesList responsibilities={data.responsibilities}/>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}


export default MainComponent