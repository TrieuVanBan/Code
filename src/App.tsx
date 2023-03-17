import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './layout/AdminLayout';
import HomeLayout from './layout/WebsiteLayout';
import HomeAdmin from './pages/admin/HomeAdmin';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<HomeAdmin />} />
          </Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
