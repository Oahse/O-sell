import './App.css';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Service from './pages/Service';
//import Header from './components/Header'
//import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} exact ></Route>
            <Route path='/services/' element={<Service/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

