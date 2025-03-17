import React from 'react';
import './Email.css';
import Layout from '../Layout/Layout';

function Email() {
  return (
    <Layout>
      <div className="email">
        <h1>Email</h1>
        <h2>Till now you dosen't have any email</h2>
        {/* Add email content here */}
      </div>
    </Layout>
  );
}

export default Email;
