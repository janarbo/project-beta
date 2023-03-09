import React, { useState, useEffect } from 'react'

function AppointmentForm() {
    const [technicians, setTechnicians] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [vin, setVin] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [technician, setTechnician] = useState('');
    const [reason, setReason] = useState('');

    const handleVinChange = (event) => {
        setVin(event.target.value);
    }
    const handleCustomerNameChange = (event) => {
        setCustomerName(event.target.value);
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }
    const handleTechnicianChange = (event) => {
        setTechnician(event.target.value);
    }
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const appoUrl = 'http://localhost:8080/api/appointments/';



        const data = {};

        data.vin = vin;
        data.customer_name = customerName;
        data.date = date;
        data.time = time;
        data.technician = technician;
        data.reason = reason;


        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'appilication/json',
            }
        };
        const response = await fetch(appoUrl, fetchConfig);
        if (response.ok) {
            setVin('');
            setCustomerName('');
            setDate('');
            setTime('');
            setTechnician('');
            setReason('');
        }
    }

    return (
        <div className='row'>
            <div className='offset-3 col-6'>
              <div className="shadow p-4 mt-4">
                <h1>Create a new appoinment</h1>
                <form onSubmit={handleSubmit} id="create-model-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleVinChange} placeholder="Vin" required type="text" name="vin"
                            id="vin" className="form-control" value={vin} />
                        <label htmlFor="vin">Vin</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleCustomerNameChange} placeholder="Customer Name" required type="text" name="customer_name"
                            id="customer_name" className="form-control" value={customerName} />
                        <label htmlFor="customer_name" >Customer name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleDateChange} placeholder="Date" required type="date" name="date"
                            id="date" className="form-control" value={date} />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleTimeChange} placeholder="Time" required type="time" name="time" id="time" value={time} className="form-control"
                        />
                        <label htmlFor="time"></label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleReasonChange} placeholder="Reason" required type="text" name="reason"
                            id="reason" className="form-control" value={reason} />
                        <label htmlFor="reason">Reason</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={handleTechnicianChange} required name="technician" id="technician" className="form-select" value={technician}>
                            <option value="">Choose a technician</option>
                            {technicians.map(technician => {
                                return (
                                    <option key={technician.id} value={technician.id}>
                                        {technician.name}
                                    </option>
                                )
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

export default AppointmentForm;
