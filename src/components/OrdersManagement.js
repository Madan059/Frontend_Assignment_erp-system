// components/OrdersManagement.js
import React from 'react';
import { ordersData } from '../data/ordersData';

function OrdersManagement() {
  return (
    <div>
      <h2>Orders Management</h2>
      {/* Display order list */}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* View order details, update status, and delete functionalities */}
    </div>
  );
}

export default OrdersManagement;
