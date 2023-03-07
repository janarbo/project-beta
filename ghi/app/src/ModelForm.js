import React, { useState, useEffect } from 'react';

function ModelForm() {
    const [manufacturers, setManufacturers] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }
    const [name, setName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.name = name;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json',
            }
        };

        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            // const newModel = await response.json();

            setName('');
            setPictureUrl('');
            setManufacturer('');
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <h1>Create a new vehicle model</h1>
                <form onSubmit={handleSubmit} id="create-model-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleNameChange} placeholder="Name" required type="text" name="name"
                            id="name" className="form-control" value={name} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handlePictureUrlChange} placeholder="Picture Url" required type="text"
                            name="picture_url" id="picture_url" className="form-control" value={pictureUrl} />
                        <label htmlFor="picture_url">Picture Url</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={handleManufacturerChange} required name="manufacturer_id" id="manufacturer_id" className="form-select" value={manufacturer}>
                            <option value="">Choose a manufacturer</option>
                            {manufacturers.map(manufacturer => {
                                return (
                                    <option key={manufacturer.id} value={manufacturer.id}>
                                        {manufacturer.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    )

}

export default ModelForm;
