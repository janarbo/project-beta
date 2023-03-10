import React, { useState, useEffect } from 'react';

function SalesRecordForm() {
    const [automobiles, setAutomobiles] = useState([]);
    const [salesPersons, setSalesPersons] = useState([]);
    const [customers, setCustomers] = useState([]);

    const [automobile, setAutomobile] = useState('');
    const [salesPerson, setSalesPerson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('');

    const fetchAutomobileData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    }
    const fetchSalesPersonData = async () => {
        const url = 'http://localhost:8090/api/salesperson/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesPersons(data.sales_person);
        }
    }
    const fetchCustomerData = async () => {
        const url = 'http://localhost:8090/api/customer/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customer);
        }
    }

    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }
    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {};
        data.automobile = automobile;
        data.sales_person = salesPerson;
        data.customer = customer;
        data.price = price;

        const salesUrl = 'http://localhost:8090/api/sales/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json',
            },
        };
        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            setAutomobile('');
            setSalesPerson('');
            setCustomer('');
            setPrice('');
        }
    }
    useEffect(() => {
        fetchAutomobileData();
        fetchSalesPersonData();
        fetchCustomerData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Sales</h1>
                    <form onSubmit={handleSubmit} id="create-sales-record-form">
                        <div className="mb-3">
                            <select onChange={handleAutomobileChange} required name="automobile" id="automobile" className="form-select" value={automobile}>
                                <option value="">Choose an Automobile</option>
                                {automobiles.map(automobile => {
                                    return (
                                        <option key={automobile.vin} value={automobile.vin}>
                                            {automobile.vin}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleSalesPersonChange}
                                required name="sales_person" id="sales_person"
                                className="form-select" value={salesPerson}>
                                <option value="">Choose a Sales Person</option>
                                {salesPersons.map(salesPerson => {
                                    return (
                                        <option key={salesPerson.id} value={salesPerson.id}>
                                            {salesPerson.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleCustomerChange} required name="customer" id="customer" className="form-select" value={customer}>
                                <option value="">Choose a Customer</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control" value={price} />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default SalesRecordForm;
