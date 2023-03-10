import React from 'react';

class SalesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales: []
        };
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8090/api/sales/')
        if (response.ok) {
            const data = await response.json();
            this.setState({ sales: data.sales })

        };
    }
    render() {
        return (
            <div>
                <h1>Sales List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Number</th>
                            <th>Customer</th>
                            <th>Automobile VIN</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sales.map(sale => {
                            return (
                                <tr key={sale.sales_person.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.sales_person.number}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile.vin}</td>
                                    <td>{sale.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default SalesList
