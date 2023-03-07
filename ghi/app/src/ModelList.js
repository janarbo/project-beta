function ModelList(props) {
    if (props.models === undefined) {
        return null;
    }
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
                {props.models.map(model => {
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
export default ModelList;
