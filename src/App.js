import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/views/Home';           
import NewView from './views/Crudadm';     

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ADM-CRUD" element={<NewView />} />
      </Routes>
    </Router>
  );
}

export default App;
