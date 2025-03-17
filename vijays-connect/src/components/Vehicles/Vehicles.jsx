import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import './Vehicles.css';
import Layout from '../Layout/Layout';

function Vehicles() {
  const [vehicles, setVehicles] = useState([
    { id: 1, vehicleNumber: 'MH12AB1234', type: 'Sedan', owner: 'John Doe' },
    { id: 2, vehicleNumber: 'MH12CD5678', type: 'SUV', owner: 'Jane Smith' },
    // Add more vehicle details here
  ]);

  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Vehicle Number', key: 'vehicleNumber' },
    { label: 'Type', key: 'type' },
    { label: 'Owner', key: 'owner' },
  ];

  return (
    <Layout>
      <div className="vehicles">
        <h1>Vehicles</h1>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.key}>{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td>{vehicle.vehicleNumber}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <CSVLink data={vehicles} headers={headers} filename="vehicles.csv" className="btn btn-primary">
          Download as CSV
        </CSVLink>
      </div>
    </Layout>
  );
}

export default Vehicles;