import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from "react";
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';


const name = 'Oahse';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home name={name}/>} exact ></Route>
        </Routes>
    </Router>
  );
}

export default App;
