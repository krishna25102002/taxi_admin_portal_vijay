import React, { useState, useEffect } from 'react';
import './TripsTable.css';

function TripsTable() {
    const [trips, setTrips] = useState([
        { id: 1, vehicleNo: 'MH04-AX-1234', driverName: 'John Doe', driverId: 'JD123', carType: 'Sedan', pickupTime: '08:00', dropTime: '08:30', customerNumber: '9876543210', tripFare: 150, status: 'Ongoing' },
        { id: 2, vehicleNo: 'MH04-BY-5678', driverName: 'Jane Smith', driverId: 'JS456', carType: 'SUV', pickupTime: '09:00', dropTime: '09:45', customerNumber: '8765432190', tripFare: 200, status: 'Completed' },
        { id: 3, vehicleNo: 'MH04-CZ-9012', driverName: 'Mike Brown', driverId: 'MB789', carType: 'Hatchback', pickupTime: '10:00', dropTime: '10:15', customerNumber: '7654321980', tripFare: 100, status: 'Ongoing' },
    ]);

    // Simulate live updates (remove this in a real application and fetch data from an API)
    useEffect(() => {
        const interval = setInterval(() => {
            setTrips(prevTrips =>
                prevTrips.map(trip => ({
                    ...trip,
                    tripFare: trip.status === 'Ongoing' ? trip.tripFare + 10 : trip.tripFare
                }))
            );
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <div className="trips-table-container">
            <h2>Live Trips</h2>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Vehicle No.</th>
                        <th>Driver Name</th>
                        <th>ID</th>
                        <th>Car Type</th>
                        <th>Pickup Time</th>
                        <th>Drop Time</th>
                        <th>Customer Number</th>
                        <th>Trip Fare</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip, index) => (
                        <tr key={trip.id}>
                            <td>{index + 1}</td>
                            <td><i className="fas fa-car"></i> {trip.vehicleNo}</td>
                            <td><i className="fas fa-user"></i> {trip.driverName}</td>
                            <td>{trip.driverId}</td>
                            <td>{trip.carType}</td>
                            <td><i className="far fa-clock"></i> {trip.pickupTime}</td>
                            <td><i className="far fa-clock"></i> {trip.dropTime}</td>
                            <td><i className="fas fa-phone"></i> {trip.customerNumber}</td>
                            <td><i className="fas fa-rupee-sign"></i> {trip.tripFare}</td>
                            <td>
                                <span className={`status-${trip.status.toLowerCase()}`}>
                                    {trip.status === 'Ongoing' ? '● ' : ''}{trip.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TripsTable;
