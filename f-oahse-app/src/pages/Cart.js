import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import Btn from '../components/Button';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import './Product.css';
import '../setting/opensanregular.css'; // Assuming this is your CSS file for Open Sans font

function Cart(props){
    const name = "Services";
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');

    const DATA = [
        { name: "Nike", logo: "https://picsum.photos/200/150?random=11", description: "A global sportswear and equipment brand.", price: "$1000" },
        { name: "Apple", logo: "https://picsum.photos/200/150?random=12", description: "A multinational technology company.", price: "$1000" },
        { name: "Samsung", logo: "https://picsum.photos/200/150?random=13", description: "A South Korean conglomerate.", price: "$1000" },
        // Add more data as needed
    ];
    
    const [filteredData, setFilteredData] = useState(DATA);

    const handleSearch = (searchText) => {
        const filtered = DATA.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filtered);
    }

    const truncateDescription = (text, maxLength) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(0);
    const [postsPerPage, setPostsPerPage] = useState(4);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setPreviousPage(page - 1);
        // You can perform additional actions here, such as fetching data for the new page.
    };
    
    return (
        <div className='carts'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} />
            <div className='mini-navbar'>
                <Search items={['ddcdcc','helo','hehere']} onClick={handleSearch} onKeyDown={handleSearch} value=" "/>
            </div>
            
                
            <div className="row p-1 m-0">
                {filteredData.slice(previousPage * postsPerPage, currentPage * postsPerPage).map((item, index) => (
                    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2 ms-0">
                        <Link to={`#card-${index}`} className="card-link">
                            <div className="card">
                                <div className="card-body p-1 align-items-center">
                                    <img src={item.logo} alt={item.name} className="find-image" />
                                    <h5 className="card-title">{item.name}</h5>
                                    <span className="card-text">Desc.: {truncateDescription(item.description, 25)}</span>
                                    <h6 className="card-title">Price: {item.price} </h6>
                                    {/* Add your button component here */}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredData.length / postsPerPage)} onPageChange={handlePageChange} />
            <Footer className='footer'/>
        </div>
    );
}

export default Cart;
