import { useState, useEffect } from 'react';

function SalesPersonHistory() {
    const [sales, setSales] = useState([]);
    const [salesPersons, setSalesPersons] = useState([]);
    const [salesPerson, setSalesPerson] = useState('');
    const [filterSales, setFilterSales] = useState([]);

    const fetchSalesData = async () => {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)

        }

    }

    const fetchSalesPersonData = async () => {
        const url = 'http://localhost:8090/api/salesperson/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesPersons(data.sales_person)
        }
    }

    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
        let filter = []
        filter = sales.filter(record => {
            return (
                record.sales_person.id == value
            )
        })
        setFilterSales(filter)
    }


    useEffect(() => {
        fetchSalesData();
        fetchSalesPersonData();
    }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p4 mt-4">
                    <h1>Sales Person History</h1>
                    <select onChange={handleSalesPersonChange} required name="sales_person" id="sales_person" value={salesPerson}>
                        <option value="">Choose a Sales Person</option>
                        {salesPersons.map(salesPerson => {
                            return (
                                <option key={salesPerson.id} value={salesPerson.id}>
                                    {salesPerson.name}
                                </option>
                            )
                        })}
                    </select>
                    <div>
                        <table className="table table=striped">
                            <thead>
                                <tr>
                                    <th>Sales Person</th>
                                    <th>Customer</th>
                                    <th>Automobile VIN</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterSales.map(sale => {
                                    return (
                                        <tr key={sale.sales_person.id}>
                                            <td>{sale.sales_person.name}</td>
                                            <td>{sale.customer.name}</td>
                                            <td>{sale.automobile.vin}</td>
                                            <td>{sale.price}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SalesPersonHistory;
