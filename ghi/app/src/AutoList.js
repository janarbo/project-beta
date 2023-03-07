import React from 'react';


class AutoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autos: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/automobiles/"
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            this.setState({autos: data.autos})
        }
    }

    render() {
      return (
        <div>
          <h1>Automobiles</h1>
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
              {this.state.autos.map(auto => {
                return (
                  <tr key={auto.href}>
                    <td>{auto.vin}</td>
                    <td>{auto.color}</td>
                    <td>{auto.year}</td>
                    <td>{auto.model.name}</td>
                    <td>{auto.model.manufacturer.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
}
  export default AutoList;












// import { useState, useEffect } from 'react';


// function AutoList(props) {
//     const [autos, setAutos] = useState([]);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const fetchAutos = async () => {
//           const url = 'http://localhost:8100/api/automobiles/';
//           try {
//             const response = await fetch(url);
//             const data = await response.json();
//             setAutos(data.autos);
//           } catch (error) {
//             setError('Error fetching autos');
//           }
//         };

//         fetchAutos();
//       }, []);

//       if (error) {
//         return <div>{error}</div>;
//       }

//     return (
//         <>
//         <h1 className="display-5 fw-bold">Automobiles</h1>
//         <table className="table table-striped table-hover">
//         <thead>
//         <tr>
//             <th>VIN</th>
//             <th>Color</th>
//             <th>Year</th>
//             <th>Model</th>
//             <th>Manufacturer</th>

//         </tr>
//         </thead>
//         <tbody>
//             {autos.map((auto) => {
//                 return (
//                 <tr key={auto.href}>
//                     <td>{auto.vin}</td>
//                     <td>{auto.color}</td>
//                     <td>{auto.year}</td>
//                     <td>{auto.model.name}</td>
//                     <td>{auto.model.manufacturer.name}</td>
//                 </tr>
//                 );
//             })}
//         </tbody>
//     </table>
//     </>
//     )

// }
// export default AutoList;
