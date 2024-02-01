import './App.css';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { BrowserRouter,HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Find from './pages/Find';
import About from './pages/About';
//import Header from './components/Header'
//import Footer from './components/Footer'


function App() {
  const ROOT_URL="http://localhost:3000/"; //"https://oahse.github.io/O-sell/"
  const findurl = ROOT_URL+"/find/";
  const abouturl = ROOT_URL+"/about/";
  console.log(findurl);
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} exact ></Route>
            <Route path="/find/" element={<Find/>} ></Route>
            <Route path="/about/" element={<About/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

