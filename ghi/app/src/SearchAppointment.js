import React from "react";
import { useState, useEffect } from "react";



const SearchAppointment = () => {
        const [searchInput, setSearchInput] = useState('');
        const [appointments, setAppointmenets] = useState('');
        const [searchedAppointments, setSearchedAppointments] = useState([])
        const [click, setClick] = useState(false);

        const getAppointments = async () => {
            const appointmentUrl = 'http://localhost:8080/api/appointments/';
            const response = await fetch(appointmentUrl);
            if (response.ok) {
                const data = await response.json();
                setAppointmenets(data.appointments)
            }
        }

        const handleSearchInput = (e) => {
            const value = e.target.value;
            setSearchInput(value);
        }

        const handleClick = (e) =>{
            e.preventDefault();
            setClick(true);
                const searchedAppts = appointments.map((appointment) =>{
                    if (appointment.vin === searchInput ) {
                        return { ...appointment};
                    }
                    return appointment;
                })
                setSearchedAppointments(searchedAppts);

        }
        useEffect(() => {
            getAppointments();
        }, []);

        return (
            <>
                <form className="input-group mb-5 mt-5" onSubmit={handleClick}>
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search for an appointment by VIN"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={handleSearchInput}
                    />
                    <button type="submit" className="btn btn-outline-primary">
                        Search VIN
                    </button>
                </form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedAppointments.map((appointment) => {
                            if (appointment.vin === searchInput && click) {
                                return (
                                    <tr key={appointment.id}>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.customer_name}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.technician.name}</td>
                                        <td>{appointment.reason}</td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </>
        );






}


export default SearchAppointment;
