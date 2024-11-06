import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import PizzaList from './components/Pizza/PizzaList';
import CustomizePizza from './components/Pizza/CustomizePizza';
import Dashboard from './components/Admin/Dashboard';
import Inventory from './components/Admin/Inventory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pizzas" element={<PizzaList />} />
        <Route path="/customize" element={<CustomizePizza />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
