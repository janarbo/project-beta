import React, { useState } from 'react';

function CustomerForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }
    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);
    }

    const handleSubmit = async (event) => {
        const data = {};
        data.name = name;
        data.address = address;
        data.phone = phone;

        const customerUrl = 'http://localhost:8090/api/customer/'
        const fetchConfig = {
            methods: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json',
            }
        };

        const response = await fetch(customerUrl, fetchConfig)
        if (response.ok) {
            setName('');
            setAddress('');
            setPhone('');
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={name} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" value={address} />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneChange} placeholder="Phone" required type="text" name="phone" id="phone" className="form-control" value={phone} />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CustomerForm;
