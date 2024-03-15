// components/ProductsManagement.js
import React from 'react';
import { productsData } from '../data/productsData';

function ProductsManagement() {
  return (
    <div>
      <h2>Products Management</h2>
      {/* Display product list */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add, edit, and delete functionalities */}
      {/* Form for adding/editing products */}
      {/* Button for deleting products */}
    </div>
  );
}

export default ProductsManagement;
