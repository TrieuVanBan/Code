import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './layout/AdminLayout';
import HomeLayout from './layout/WebsiteLayout';
import HomeAdmin from './pages/admin/HomeAdmin';
import Signin from './pages/auth/signin';
import Register from './pages/auth/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<HomeAdmin />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
          </Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
