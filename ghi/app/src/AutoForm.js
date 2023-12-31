import React, { useState, useEffect } from 'react';

function AutoForm() {
    const [models, setModels] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }

    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const handleSubmit = async (event) => {
        const data = {};

        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;

        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json',
            }
        };

        const response = await fetch(autoUrl, fetchConfig);
        if (response.ok) {

            setColor('');
            setYear('');
            setVin('');
            setModel('');
        }


    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create an automoblie to inventory</h1>
                    <form id="create-auto-form" onSubmit={handleSubmit} >
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" value={color} />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleYearChange} placeholder="Year" required type="text" name="year" id="year" className="form-control" value={year} />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" value={vin} />
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleModelChange} name="model_id" id="model_id" className="form-select" required value={model}>
                                <option value="">Choose a vehicle model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>{model.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default AutoForm;
