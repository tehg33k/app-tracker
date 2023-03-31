import React, { useState } from "react";
import PropTypes from "prop-types";

const AddJob = ({ setJobsList }) => {

    const [newJob, setNewJob] = useState({
        company_name: "",
        job_role: "",
        date_applied: "",
        app_status: "",
      });

    const changeHandler = (e) => {
        setNewJob({
            ...newJob,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitClick = async e => {
        e.preventDefault();
        try {
            const body = { ...newJob };
            const response = await fetch("http://localhost:5000/job", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            setJobsList(prevJobsList => [...prevJobsList, data]);
            setNewJob({
                company_name: "",
                job_role: "",
                date_applied: "",
                app_status: "",
            });
            window.location = "/";
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="modal fade" id='myModal' data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Add Job</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            >
                            </button>
                        </div>

                        <div className="modal-body">
                            <label>
                                Company Name:
                                <input
                                    type="text"
                                    name="company_name"
                                    className="form-control"
                                    onChange={changeHandler}
                                    value={newJob.company_name}
                                />
                            </label>

                            <label>
                                Job Role:
                                <input
                                    type="text"
                                    name="job_role"
                                    className="form-control"
                                    onChange={changeHandler}
                                    value={newJob.job_role}
                                />
                            </label>

                            <label className="date-input">
                                Date:
                                <input
                                    type="date"
                                    name="date_applied"
                                    className="form-control"
                                    onChange={changeHandler}
                                    value={newJob.date_applied}
                                />
                            </label>

                            <div className="dropdown">
                                Application Status:
                                <select className="form-select" aria-label="status" name="app_status" onChange={changeHandler} value={newJob.app_status}>
                                    <option hidden={true}>Select Status</option>
                                    <option disabled="disabled" default={true}> Select Status</option>
                                    <option>Applied</option>
                                    <option>Rejected</option>
                                    <option>Interviewed</option>
                                    <option>Technical</option>
                                    <option>Offer</option>
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                onClick={handleSubmitClick}
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

AddJob.propTypes = {
    setJobsList: PropTypes.func.isRequired,
  };

export default AddJob;