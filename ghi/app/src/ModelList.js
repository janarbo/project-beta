import React from 'react';

class ModelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            models: []
        };
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:8100/api/models/')
        if (response.ok) {
            const data = await response.json();
            this.setState({ models: data.models })
        };
    }
    render() {
        return (
            <div>
                <h1>Models</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Manufacturer</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.models.map(model => {
                            return (
                                <tr key={model.href}>
                                    <td>{model.name}</td>
                                    <td>{model.manufacturer.name}</td>
                                    <td><img src={model.picture_url} width="200" height="150"></img></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ModelList;
