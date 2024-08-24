import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './paginas/Homepage';
import NavBar from './componentes/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      
      </Routes>
    </Router>
  );
}

export default App;
