import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<h1>Dashboard</h1>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
