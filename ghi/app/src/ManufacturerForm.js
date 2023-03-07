import React, { useEffect, useState } from 'react';

function ManufacturerForm() {
    const [manufactName, setManufactName] = useState('');
    const handleManufactName = (event) => {
        setManufactName(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}

        data.name = manufactName;

        const url= 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };


        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setManufactName('');
        }
    }


    return (
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer</h1>
            <form id="create-conference-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input
                placeholder="Name"
                required type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={handleManufactName}
                value={manufactName}
                />
                <label htmlFor="model_name">Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    );
}

export default ManufacturerForm;
