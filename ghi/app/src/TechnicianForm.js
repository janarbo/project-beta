import React, { useState } from 'react';

function TechnicianForm() {

    const [name, setName] = useState('');
    const [employeeNum, setEmployeeNum] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleEmployeeNumChange = (event) => {
        const value = event.target.value;
        setEmployeeNum(value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        data.employee_number = employeeNum;
        console.log(data)
        const url = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        console.log(response)
        if (response.ok) {
            setName('');
            setEmployeeNum('');

            }
        }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <h1>Create a new technician</h1>
                <form onSubmit={handleSubmit} id="create-model-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleNameChange} placeholder="Name" required type="text" name="name"
                            id="name" className="form-control" value={name} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleEmployeeNumChange} placeholder="Employment_number" required type="number"
                            name="employee_number" id="employee_number" className="form-control" value={employeeNum} />
                        <label htmlFor="employee_number">Employment number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    )

}


export default TechnicianForm;
