import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';           
import NewView from './views/Crudadm';  
import Logincrud from './views/Logincrud';   

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ADM-CRUD" element={<NewView />} />
        <Route path="/Login" element={<Logincrud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
