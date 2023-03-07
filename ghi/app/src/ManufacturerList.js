function ManufacturerList(props) {
    if (!props.manufacturers || !Array.isArray(props.manufacturers)) {
        return null;
      }
    return (
        <>
        <h1 className="display-5 fw-bold">Manufacturers</h1>
        <table className="table table-striped table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th>ID</th>
        </tr>
        </thead>
        <tbody>
            {props.manufacturers.map((manufacturer) => {
                return (
                <tr key={manufacturer.href}>
                    <td>{manufacturer.name}</td>
                    <td>{manufacturer.id}</td>
                </tr>
                );
            })}
        </tbody>
    </table>
    </>
    )
}

export default ManufacturerList;
