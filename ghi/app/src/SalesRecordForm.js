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
            setAutomobiles(data.automobiles);
        }
    }
    const fetchSalesPersonData = async () => {
        const url = 'http://localhost:8090/api/salesperson/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesPersons(data.salesPersons);
        }
    }
    const fetchCustomerData = async () => {
        const url = 'http://localhost:8090/api/customer/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
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
                            {/* select tag goes here */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default SalesRecordForm;
