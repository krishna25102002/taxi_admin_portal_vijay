import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import './Trips.css';
import Layout from '../Layout/Layout';

function Trips() {
  const [trips, setTrips] = useState([
    { serialNo: 1, vehicleNo: 'MH12AB1234', driverName: 'John Doe', id: 'D001', carType: 'Sedan', pickupTime: '2025-03-13 10:00', dropTime: '2025-03-13 11:00', customerNumber: '9876543210', tripFare: 500, status: 'Completed' },
    { serialNo: 2, vehicleNo: 'MH12CD5678', driverName: 'Jane Smith', id: 'D002', carType: 'SUV', pickupTime: '2025-03-13 12:00', dropTime: '2025-03-13 13:00', customerNumber: '9123456789', tripFare: 700, status: 'Completed' },
    // Add more trip details here
  ]);

  const headers = [
    { label: 'Serial No.', key: 'serialNo' },
    { label: 'Vehicle No.', key: 'vehicleNo' },
    { label: 'Driver Name', key: 'driverName' },
    { label: 'ID', key: 'id' },
    { label: 'Car Type', key: 'carType' },
    { label: 'Pickup Time', key: 'pickupTime' },
    { label: 'Drop Time', key: 'dropTime' },
    { label: 'Customer Number', key: 'customerNumber' },
    { label: 'Trip Fare', key: 'tripFare' },
    { label: 'Status', key: 'status' },
  ];

  return (
    <Layout>
      <div className="trips">
        <h1>Trips</h1>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.key}>{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.serialNo}>
                <td>{trip.serialNo}</td>
                <td>{trip.vehicleNo}</td>
                <td>{trip.driverName}</td>
                <td>{trip.id}</td>
                <td>{trip.carType}</td>
                <td>{trip.pickupTime}</td>
                <td>{trip.dropTime}</td>
                <td>{trip.customerNumber}</td>
                <td>{trip.tripFare}</td>
                <td>{trip.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <CSVLink data={trips} headers={headers} filename="trips.csv" className="btn btn-primary">
          Download as CSV
        </CSVLink>
      </div>
    </Layout>
  );
}

export default Trips;