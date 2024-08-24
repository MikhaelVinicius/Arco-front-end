import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './paginas/Homepage';
import NavBar from './componentes/NavBar';
import Menu from './componentes/Menu';


function App() {
  return (
    <Router>
      
      <Menu/>
      <Routes>
     
      </Routes>
    </Router>
  );
}

export default App;
