import React, { useState, useEffect } from 'react';
import './Drivers.css';
import Layout from '../Layout/Layout';
import * as api from './api';

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        console.error('Token not available');
        return;
      }
      try {
        const driversData = await api.fetchDrivers(token);
        setDrivers(driversData);

        const documentsData = await api.fetchAllDocuments(token);
        setDocuments(documentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  const handleApprovalChange = (id) => {
    setDrivers((prevDrivers) => {
      return prevDrivers.map((driver) => {
        if (driver.id === id) {
          const newStatus = driver.status === 'Pending' ? 'Approved' : 'Pending';
          if (newStatus === 'Approved') {
            if (!token) {
              console.error('Token not available');
              return driver;
            }
            api.approveDriver(token, id)
              .then(response => {
                console.log('Driver approved:', response);
                // Optionally, update the driver's data
              })
              .catch(error => {
                console.error('Error approving driver:', error);
                // Handle the error, e.g., display an error message to the user
              });
          }
          return { ...driver, status: newStatus };
        } else {
          return driver;
        }
      });
    });
  };

  const handleTrialExtendChange = (id) => {
    setDrivers((prevDrivers) => {
      return prevDrivers.map((driver) => {
        if (driver.id === id) {
          if (!token) {
            console.error('Token not available');
            return driver;
          }
          api.extendTrial(token, id)
            .then(response => {
              console.log('Driver expiration extended:', response);
              // Optionally, update the driver's data with the new expiration date
            })
            .catch(error => {
              console.error('Error extending driver expiration:', error);
              // Handle the error, e.g., display an error message to the user
            });
          return { ...driver, trialExtended: !driver.trialExtended };
        } else {
          return driver;
        }
      });
    });
  };

  const handleDocumentClick = async (documentId) => {
    if (!token) {
      console.error('Token not available');
      return;
    }
    try {
      const url = await api.getDocumentUrl(token, documentId);
      window.open(url, '_blank'); // Open in new tab
    } catch (error) {
      console.error('Error fetching pre-signed URL:', error);
    }
  };

  return (
    <Layout>
      <div className="drivers">
        <h1>Drivers</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Aadhaar Front</th>
              <th>Aadhaar Back</th>
              <th>License Front</th>
              <th>License Back</th>
              <th>Photo</th>
              <th>Approval</th>
              <th>Trial Extend [30 days]</th>
              <th>Documents</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.status}</td>
                <td>
                  <img src={driver.aadhaarFront} alt="Aadhaar Front" width="50" height="50" />
                </td>
                <td>
                  <img src={driver.aadhaarBack} alt="Aadhaar Back" width="50" height="50" />
                </td>
                <td>
                  <img src={driver.licenseFront} alt="License Front" width="50" height="50" />
                </td>
                <td>
                  <img src={driver.licenseBack} alt="License Back" width="50" height="50" />
                </td>
                <td>
                  <img src={driver.photo} alt={`${driver.name}'s photo`} width="50" height="50" />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={driver.status === 'Approved'}
                    onChange={() => handleApprovalChange(driver.id)}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={driver.trialExtended}
                    onChange={() => handleTrialExtendChange(driver.id)}
                  />
                </td>
                <td>
                  {documents.filter(doc => doc.driverId === driver.id).map(doc => (
                    <div key={doc.id}>
                      <a
                        href="#"
                        onClick={() => handleDocumentClick(doc.id)}
                      >
                        {doc.name}
                      </a>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Drivers;