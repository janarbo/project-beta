import React, { useState } from 'react';

function SalesPersonForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleNumberChange = (event) => {
        const value = event.target.value;
        setNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {};
        data.name = name;
        data.number = number;

        const salespersonUrl = 'http://localhost:8090/api/salesperson/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(salespersonUrl, fetchConfig);
        if (response.ok) {
            setName('');
            setNumber('');
        }
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Sales Person</h1>
                    <form onSubmit={handleSubmit} id="create-sales-person-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={name} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleNumberChange} placeholder="Number" required type="text" name="number" id="number" className="form-control" value={number} />
                            <label htmlFor="number">Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default SalesPersonForm;
