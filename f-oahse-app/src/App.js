import './App.css';

import React from "react";
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import HomePage from './pages/HomePage';


const name = 'Oahse';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage name={name}/>} exact ></Route>
        </Routes>
    </Router>
  );
}

export default App;
