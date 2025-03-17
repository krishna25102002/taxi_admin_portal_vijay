import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://52.66.69.48:4000/auth/login', {
            phone: "+91" + phone,
            otp: otp
        })
            .then(response => {
                // Handle successful login
                console.log('Login successful:', response.data);
                // Store the token (example using localStorage)
                localStorage.setItem('token', response.data.access_token);
                // Redirect to the desired page
                navigate('/dashboard'); // Replace '/dashboard' with your actual route
            })
            .catch(error => {
                // Handle login error
                console.error('Login failed:', error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Server responded with:', error.response.status, error.response.data);
                    setError(`Login failed: Server responded with status ${error.response.status}`);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received:', error.request);
                    setError('Login failed: No response from server.');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error setting up the request:', error.message);
                    setError(`Login failed: ${error.message}`);
                }
            });
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="otp">OTP</label>
                    <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
