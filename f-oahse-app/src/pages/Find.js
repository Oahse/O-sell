import { React, useState, useEffect, useRef, faEye, faCommentAlt} from '../components/all_imports';
import './Find.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import Btn from '../components/Button';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Find(props){
    const name = "Services";
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };
    
    const DATA = [
        { name: "Nike", logo: "https://picsum.photos/200/150?random=11", description: "A global sportswear and equipment brand.",price: "$1000" },
        { name: "Apple", logo: "https://picsum.photos/200/150?random=12", description: "A multinational technology company.",price: "$1000" },
        { name: "Samsung", logo: "https://picsum.photos/200/150?random=13", description: "A South Korean conglomerate.",price: "$1000" },
        { name: "Coca-Cola", logo: "https://picsum.photos/200/150?random=14", description: "A world-renowned beverage brand.",price: "$1000" },
        { name: "Toyota", logo: "https://picsum.photos/200/150?random=15", description: "A Japanese automotive manufacturer.",price: "$1000" },
        { name: "Amazon", logo: "https://picsum.photos/200/150?random=16", description: "An American multinational technology company.",price: "$1000" },
        { name: "Microsoft", logo: "https://picsum.photos/200/150?random=17", description: "A global technology corporation.",price: "$1000" },
        { name: "Adidas", logo: "https://picsum.photos/200/150?random=18", description: "A multinational corporation that designs and manufactures sportswear and accessories.",price: "$1000" },
        { name: "McDonald's", logo: "https://picsum.photos/200/150?random=19", description: "A global fast-food restaurant chain.",price: "$1000" },
        { name: "Google", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company specializing in Internet-related services and products.",price: "$1000" },
      ];
    
    const [filteredData, setFilteredData] = useState(DATA);
    
    function handleSearch(searchText) {
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
      setPreviousPage(page-1);
      // You can perform additional actions here, such as fetching data for the new page.
    };
    
    return (
        <div className='service'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <div className='mini-navbar ms-auto'>
                <Search items={['ddcdcc','helo','hehere']} onClick={handleSearch} onKeyDown={handleSearch} value=" "/>
            </div>
            <SideNavBar iconColor={iconColor}/>
                
            <div className="row p-1 m-0">
              {filteredData.slice(previousPage*postsPerPage, currentPage*postsPerPage).map((item, index) => (
                <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-2 ms-0">
                  <a href={`#card-${index}`} className="card-link">
                    <div className="card">
                      <div className="card-body p-1 align-items-center">
                        <img src={item.logo} alt={item.name} className="find-image" />
                        <h5 className="card-title">{item.name}</h5>
                        
                        <span className="card-text">Desc.: {truncateDescription(item.description, 25)}</span>
                        <h6 className="card-title">Price: {item.price} </h6>
                        
                        {/* Add your button component here */}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredData.length / postsPerPage)} onPageChange={handlePageChange} />
            <Footer className='footer'/>
        </div>
    );
}
export default Find;