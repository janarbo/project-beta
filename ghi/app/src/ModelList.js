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
                                <td>{model.picture_url}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

// function ModelList(props) {
//     if (props.models === undefined) {
//         return null;
//     }
//     return (
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Manufacturer</th>
//                     <th>Picture</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.models.map(model => {
//                     return (
//                         <tr key={model.href}>
//                             <td>{model.name}</td>
//                             <td>{model.manufacturer.name}</td>
//                             <td>{model.picture_url}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//     );
// }
export default ModelList;
