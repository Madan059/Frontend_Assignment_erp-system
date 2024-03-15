// components/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Display key metrics or features */}
      <p>Total number of products: X</p>
      <p>Total number of orders: Y</p>
      {/* Quick navigation links */}
      <a href="/products">Products Management</a>
      <a href="/orders">Orders Management</a>
      <a href="/calendar">Orders Calendar (Optional)</a>
    </div>
  );
}

export default Dashboard;
