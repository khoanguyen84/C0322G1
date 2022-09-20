import React, { useState, useRef } from "react";
function Job(){

    const [jobs, setJobs] = useState(["Lau nhà", "Nấu cơm", "Rửa chén"]);
    const [jobname, setJobname] = useState('');
    const jobRef = useRef();

    const handleAddJob = () => {
        // let newJobname = document.querySelector('#jobname').value;
        // let newJobList = [...jobs];
        // newJobList.push(newJobname);
        // setJobs(newJobList);
        // setJobs([...jobs, newJobname])
        setJobs([...jobs, jobname]);
        setJobname("");
        jobRef.current.focus();
    }
    console.log(jobname)
    return (
        <div className="job-area">
            <div className="add-job">
                <label htmlFor="jobname">Jobname</label> 
                <input type="text" 
                    id="jobname"
                    value={jobname}
                    onInput={(e) => setJobname(e.target.value)}
                    ref={jobRef}
                     />
                <button onClick={handleAddJob}>Add</button>
            </div>
            <div className="job-list">
                <ul>
                    {
                        jobs.map((job,index) => 
                            <li key={index}>{job}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Job;