import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Find from './pages/Find';
import Product from './pages/Product';
import About from './pages/About';

function App() {
  const ROOT_URL="http://localhost:3000"; //"https://oahse.github.io/O-sell/"
  const findurl = ROOT_URL+"/find/";
  const abouturl = ROOT_URL+"/about/";
  console.log(findurl);
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} exact ></Route>
            <Route path="/find/" element={<Find/>} ></Route>
            <Route path="/products/" element={<Product/>} ></Route>
            <Route path="/products/cart/" element={<Product/>} ></Route>
            <Route path="/about/" element={<About/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

