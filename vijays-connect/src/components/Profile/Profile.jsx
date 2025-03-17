import React from 'react';
import './Profile.css';
import Layout from '../Layout/Layout';

function Profile() {
    return (
        <Layout>
            <div className="profile">
                <h1>Admin Profile</h1>
                <div className="profile-details">
                    <p><strong>Name:</strong> Vijay</p>
                    <p><strong>Email:</strong> vijay@example.com</p>
                    <p><strong>Role:</strong> Administrator</p>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;
