function AutoList(props) {
    if (!props.autos || !Array.isArray(props.autos)) {
        return null;
    }
    return (
        <>
        <h1 className="display-5 fw-bold">Automobiles</h1>
        <table className="table table-striped table-hover">
        <thead>
        <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>

        </tr>
        </thead>
        <tbody>
            {props.autos.map((auto) => {
                return (
                <tr key={auto.href}>
                    <td>{auto.vin}</td>
                    <td>{auto.color}</td>
                    <td>{auto.year}</td>
                    <td>{auto.model.name}</td>
                    <td>{auto.model.manufacturer.name}</td>
                </tr>
                );
            })}
        </tbody>
    </table>
    </>
    )
}

export default AutoList;
