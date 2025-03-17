import React, { useState } from 'react';
import './ScheduleTrip.css';
import Layout from '../Layout/Layout';

function ScheduleTrip() {
  const [trips, setTrips] = useState([]);
  const [form, setForm] = useState({
    pickupTime: '',
    from: '',
    to: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrips((prevTrips) => [...prevTrips, { ...form, id: prevTrips.length + 1 }]);
    setForm({ pickupTime: '', from: '', to: '', phoneNumber: '' });
  };

  return (
    <Layout>
      <div className="schedule-trip">
        <h1>Schedule Trip</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pickup Time:</label>
            <input
              type="datetime-local"
              name="pickupTime"
              value={form.pickupTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>From:</label>
            <input
              type="text"
              name="from"
              value={form.from}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>To:</label>
            <input
              type="text"
              name="to"
              value={form.to}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Schedule Trip</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pickup Time</th>
              <th>From</th>
              <th>To</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.id}</td>
                <td>{trip.pickupTime}</td>
                <td>{trip.from}</td>
                <td>{trip.to}</td>
                <td>{trip.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ScheduleTrip;