// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import ProductsManagement from './components/ProductsManagement.js';
import OrdersManagement from './components/OrdersManagement.js';
import OrdersCalendar from './components/OrdersCalendar.js'; // Optional

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsManagement />} />
        <Route path="/orders" element={<OrdersManagement />} />
        <Route path="/calendar" element={<OrdersCalendar />} /> {/* Optional */}
      </Routes>
    </Router>
  );
}

export default App;

