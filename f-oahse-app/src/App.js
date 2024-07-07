import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from "react";
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/Cart';
import ProfilePage from './pages/Profile';


const name = 'Oahse';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home name={name}/>} exact ></Route>
          <Route path="/tradeperson/:id/view" element={<ProfilePage name={name}/>} exact ></Route>
          <Route path="/tradeperson/:id/chat" element={<Home name={name}/>} exact ></Route>
          <Route path="/cart" element={<CartPage name={name}/>} exact ></Route>
        </Routes>
    </Router>
  );
}

export default App;
