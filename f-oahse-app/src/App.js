import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Find from './pages/Find';
import Product from './pages/Product';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';
import About from './pages/About';
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage';
import SignUpForContractorsPage from './pages/SignUpForContractorsPage'
import ProfilePage from './pages/ProfilePage';
import ChatRoom from './pages/ChatRoom';
import ProductList from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetails';
import ProfileReports from './pages/ProfileReports';
import PaymentsForm from './pages/PaymentsPage';


function App() {
  const ROOT_URL="http://localhost:3000"; //"https://oahse.github.io/O-sell/"
  const findurl = ROOT_URL+"/find/";
  const abouturl = ROOT_URL+"/about/";
  console.log(findurl);

  //data from login api--------------------------------
  const profile = {
      name: "oscar oc",
      profession: "Software Engineer",
      degree: "Computer Science",
      age: 32,
      picture: "https://randomuser.me/api/portraits/men/1.jpg"
  };
  //-------------------------------------------------------------
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>} exact ></Route>
            <Route path="/find" element={<Find profile={profile}/>} ></Route>
            <Route path="/products" element={<Product/>} ></Route>
            <Route path="/products/list" element={<ProductList/>} ></Route>
            <Route path="/products/cart" element={<Cart/>} ></Route>
            <Route path="/products/:id" element={<ProductDetailsPage/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/contact" element={<ContactPage/>} ></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/signup" element={<SignUpPage/>}></Route>
            <Route path="/signup-for-contractors" element={<SignUpForContractorsPage/>}></Route>
            <Route path='/profile' element={<ProfilePage/>}></Route>
            <Route path='/profile/reports/:id' element={<ProfileReports/>}></Route>
            <Route path='/profile/payments/:id' element={<PaymentsForm/>}></Route>
            <Route path="/chat/:id" element={<ChatRoom />} ></Route>
        </Routes>
    </HashRouter>
  );
}

export default App;

