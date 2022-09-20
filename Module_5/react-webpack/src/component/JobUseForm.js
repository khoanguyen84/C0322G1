import React, { useState } from "react";
const jobData = 'job-data'
function JobUseForm() {
    const [jobs, setJobs] = useState(() => {
        let data = [];
        if (window.localStorage.getItem(jobData) === null) {
            data = ["Lau nhà", "Nấu cơm"];
            window.localStorage.setItem(jobData, JSON.stringify(data));
        }
        else {
            data = JSON.parse(window.localStorage.getItem(jobData))
        }
        console.log('executor function')
        return data;
    });
    const [jobname, setJobname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setJobs([...jobs, jobname]);
        setJobname("");
    }

    const handleRemove = (pos) => {
        let confirm = window.confirm('Confirm to remove job?')
        if (confirm) {
            setJobs(pre => pre.filter((item, index) => index != pos));
        }
    }

    window.localStorage.setItem(jobData, JSON.stringify(jobs));

    return (
        <div className="job-area">
            <div className="add-job">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="jobname">Jobname</label>
                    <input type="text"
                        id="jobname"
                        value={jobname}
                        onInput={(e) => setJobname(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className="job-list">
                <ul>
                    {
                        jobs.map((job, index) =>
                            <li key={index}>{job}
                                <span className="remove-job"
                                    onClick={() => handleRemove(index)}
                                >&times;</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default JobUseForm;