import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css';
// import 'https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-thin.css';
// import 'https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-solid.css';
// import 'https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-regular.css';
// import 'https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-light.css';
import './App.css';

import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/Cart';
import ProfilePage from './pages/EngineerProfile';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import ChatRoom from './pages/ChatPage';

import { useNavigate, useLocation } from 'react-router-dom';

const UnknownRouteHandler = ({ setUnknownRoute }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Log the unknown route to the console
    console.log('Unknown route:', location.pathname);
    // Optionally, you can pass this information to the Home component
    setUnknownRoute(location.pathname);
    // Redirect to the Home page
    navigate('/');
  }, [location, navigate, setUnknownRoute]);

  return null;
};

const name = 'Oahse';



function App() {
  const [unknownRoute, setUnknownRoute] = useState('');

  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home name={name} unknownRoute={unknownRoute}/>} exact ></Route>
          <Route path="/shop" element={<Home name={name} unknownRoute={unknownRoute}/>} exact ></Route>
          <Route path="/account" element={<Home name={name} unknownRoute={unknownRoute}/>} exact ></Route>
          <Route path="/jobs" element={<Home name={name} unknownRoute={unknownRoute}/>} exact ></Route>
          <Route path="/tradesperson" element={<Home name={name} unknownRoute={unknownRoute}/>} exact ></Route> */}
          <Route path="/" element={<Home name={name} unknownRoute={unknownRoute}/>} exact ></Route>
          <Route path="/tradesperson/:id/view" element={<ProfilePage name={name}/>} exact ></Route>
          <Route path="/tradesperson/:id/chat" element={<ChatRoom name={name}/>} exact ></Route>
          <Route path="/jobs/:id/view" element={<JobDetails name={name}/>} exact ></Route>
          <Route path="/jobs/:id/chat" element={<ProfilePage name={name}/>} exact ></Route>
          {/* <Route path="/shop/products/:id" element={<ProductDetailsPage name={name}/>} exact ></Route> */}
          <Route path="*" element={<UnknownRouteHandler setUnknownRoute={setUnknownRoute} />} />
        </Routes>
    </Router>
  );
}

export default App;
