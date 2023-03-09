import React from 'react';

class CustomerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        };
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:8090/api/customer/')
        if (response.ok) {
            const data = await response.json();
            this.setState({ customers: data.customers })
        };
    }
    render() {
        return (
            <div>
                <h1>Customer</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map(customer => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.phone}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CustomerList;
