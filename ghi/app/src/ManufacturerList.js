import React from 'react';

class ManufacturerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            manufacturers: []
        }
    }
    async componentDidMount() {
        const url = "http://localhost:8100/api/manufacturers/"
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            this.setState({manufacturers: data.manufacturers})
        }
    }
render() {
  return (
        <div>
          <h1>Manufacturers</h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
              </tr>
            </thead>
                <tbody>
                  {this.state.manufacturers.map(manufacturer => {
                      return (
                          <tr key={manufacturer.href}>
                              <td>{manufacturer.name}</td>
                              <td>{manufacturer.id}</td>
                          </tr>
                      )
                  })}
              </tbody>
          </table>
        </div>
      )
  }
}
export default ManufacturerList;

// import { useState, useEffect } from 'react';

// function ManufacturerList() {
//   const [manufacturers, setManufacturers] = useState([]);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchManufacturers = async () => {
//       const url = 'http://localhost:8100/api/manufacturers/';
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setManufacturers(data.manufacturers);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchManufacturers();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <>
//       <h1 className="display-5 fw-bold">Manufacturers</h1>
//       <table className="table table-striped table-hover">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {manufacturers.map((manufacturer) => {
//             return (
//               <tr key={manufacturer.href}>
//                 <td>{manufacturer.name}</td>
//                 <td>{manufacturer.id}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default ManufacturerList;
