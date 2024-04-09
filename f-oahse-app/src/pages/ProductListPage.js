import { React, useState,Link,Container,} from '../components/all_imports';
import './Product.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import { Modal, Checkbox} from 'antd'; // Assuming you're using Ant Design components

import Search from '../components/Search';
import Pagination from '../components/Pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function ProductList(props){
    const name = "ProductList";
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
    const [postsPerPage, setPostsPerPage] = useState(9);

    const handlePageChange = (page) => {
      setCurrentPage(page);
      setPreviousPage(page-1);
      // You can perform additional actions here, such as fetching data for the new page.
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        price: false,
        location: false,
        category: false,
        rating: false,
        availability: false,
        sortBy: false
    });

    const handleFilterIconClick = () => {
        setIsModalVisible(true);
    };

    const handleModalOk = () => {
        setIsModalVisible(false);
        // Perform any necessary actions when the modal is confirmed
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };
    const handleFilterChange = (filterName, checked) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterName]: checked
        }));
    };
    
    return (
        <div className='productlist'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <div className='mini-navbar ms-auto'>
                <Search items={['ddcdcc','helo','hehere']} filter={<i className='bi bi-sliders' style={{fontSize:'18px'}} onClick={handleFilterIconClick}></i>} onClick={handleSearch} onKeyDown={handleSearch} value=" "/>
                <Modal
                title="Filter Options"
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                okText="Apply"
                cancelText="Cancel"
            >
                <Checkbox.Group className='flex-column' onChange={(checkedValues) => console.log('checked =', checkedValues)}>
                    <Checkbox onChange={(e) => handleFilterChange('price', e.target.checked)}>Price</Checkbox>
                    <Checkbox onChange={(e) => handleFilterChange('location', e.target.checked)}>Location</Checkbox>
                    <Checkbox onChange={(e) => handleFilterChange('category', e.target.checked)}>Category</Checkbox>
                    <Checkbox onChange={(e) => handleFilterChange('rating', e.target.checked)}>Rating</Checkbox>
                    <Checkbox onChange={(e) => handleFilterChange('availability', e.target.checked)}>Availability</Checkbox>
                    <Checkbox onChange={(e) => handleFilterChange('sortBy', e.target.checked)}>Sort By</Checkbox>
                </Checkbox.Group>
                {/* You can add additional input fields or dropdowns here for more specific filter options */}
            </Modal>
            </div>
            <SideNavBar iconColor={iconColor}/>
            
            <Container fluid>
            
                
            <div className="row p-0 m-0">
              {filteredData.slice(previousPage*postsPerPage, currentPage*postsPerPage).map((item, index) => (
                <div key={index} className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-2 ms-0 p-1">
                  <Link to={`/products/${item.name}`} className="card-link">
                    <div className="card m-1">
                      <div className="card-body p-1 align-items-center">
                        <img src={item.logo} alt={item.name} className="find-image" />
                        <p className="card-title m-0">{item.name}</p>
                        
                        <small className="card-text m-0 p-0">{truncateDescription(item.description, 20)}</small><br/>
                        <small className="card-title text-dark m-0">{item.price} </small>
                        
                        {/* Add your button component here */}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredData.length / postsPerPage)} onPageChange={handlePageChange} />
            </Container>
            <Footer className='footer'/>
        </div>
    );
}
export default ProductList;
