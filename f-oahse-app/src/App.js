// //import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
//import Header from './components/Header'
//import Footer from './components/Footer'


function App() {
  return (
    // <Home />
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} exact ></Route>
            
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;

