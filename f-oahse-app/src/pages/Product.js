import { React, useState, useEffect, useRef, faEye, faCommentAlt, Link, Navigation, faGooglePlay, faAppStore, Swiper, SwiperSlide, Container,} from '../components/all_imports';
import './Product.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import Btn from '../components/Button';
import IconButton from '../components/Iconbutton';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function Product(props){
    const name = "Services";
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const linkstyles = {
        fontFamily: 'Open Sans, sans-serif',
        color:iconColor
    };
    const products = [
        { name: "Car", image: "https://picsum.photos/200/150?random=1", price: "$1000" },
        { name: "Laptop", image: "https://picsum.photos/200/150?random=2", price: "$800" },
        { name: "Smartphone", image: "https://picsum.photos/200/150?random=3", price: "$500" },
        { name: "Headphones", image: "https://picsum.photos/200/150?random=4", price: "$100" },
        { name: "Watch", image: "https://picsum.photos/200/150?random=5", price: "$300" },
        { name: "Camera", image: "https://picsum.photos/200/150?random=6", price: "$1200" },
        { name: "Shoes", image: "https://picsum.photos/200/150?random=7", price: "$80" },
        { name: "Sunglasses", image: "https://picsum.photos/200/150?random=8", price: "$50" },
        { name: "Backpack", image: "https://picsum.photos/200/150?random=9", price: "$40" },
        { name: "Gaming Console", image: "https://picsum.photos/200/150?random=10", price: "$400" },
      ];
    const companyBrands = [
        { brand: "Nike", logo: "https://picsum.photos/200/150?random=1999", description: "A global sportswear and equipment brand." },
        { brand: "Apple", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company." },
        { brand: "Samsung", logo: "https://picsum.photos/200/150?random=23", description: "A South Korean conglomerate." },
        { brand: "Coca-Cola", logo: "https://picsum.photos/200/150?random=24", description: "A world-renowned beverage brand." },
        { brand: "Toyota", logo: "https://picsum.photos/200/150?random=25", description: "A Japanese automotive manufacturer." },
        { brand: "Amazon", logo: "https://picsum.photos/200/150?random=26", description: "An American multinational technology company." },
        { brand: "Microsoft", logo: "https://picsum.photos/200/150?random=27", description: "A global technology corporation." },
        { brand: "Adidas", logo: "https://picsum.photos/200/150?random=28", description: "A multinational corporation that designs and manufactures sportswear and accessories." },
        { brand: "McDonald's", logo: "https://picsum.photos/200/150?random=19", description: "A global fast-food restaurant chain." },
        { brand: "Google", logo: "https://picsum.photos/200/150?random=20", description: "A multinational technology company specializing in Internet-related services and products." },
      ];

      const categories = [
        { name: "Electonics", logo: "https://picsum.photos/200/150?random=11", description: "A global sportswear and equipment brand." },
        { name: "Power", logo: "https://picsum.photos/200/150?random=12", description: "A multinational technology company." },
        { name: "Electricals", logo: "https://picsum.photos/200/150?random=13", description: "A South Korean conglomerate." },
        { name: "Accessories", logo: "https://picsum.photos/200/150?random=14", description: "A world-renowned beverage brand." },
        { name: "Technicians", logo: "https://picsum.photos/200/150?random=15", description: "A Japanese automotive manufacturer." },
        { name: "Engineers", logo: "https://picsum.photos/200/150?random=16", description: "An American multinational technology company." },
        { name: "Publications", logo: "https://picsum.photos/200/150?random=17", description: "A global technology corporation." },
        { name: "Books", logo: "https://picsum.photos/200/150?random=18", description: "A multinational corporation that designs and manufactures sportswear and accessories." },
        ];
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
        <div className='products'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <div className='mini-navbar ms-auto'>
                <Search items={['ddcdcc','helo','hehere']} onClick={handleSearch} onKeyDown={handleSearch} value=" "/>
            </div>
            <SideNavBar iconColor={iconColor}/>
            <div className='mb-5'>
                
                <Swiper navigation={true} modules={[Navigation]} className="carousel" loop={true}>
                    {products.map((product, index) => (
                            <SwiperSlide><img src={product.image} alt='' />
                            <div className='image-text row p-4'>
                                <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8  float-left mt-5 mb-0' style={{marginTop:'100px'}}>
                                  <h2>Your Engineering Services <br/>
                                      Made Easier,
                                      Made Better,
                                  </h2>
                                </div>
                                <div className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 float-right row mb-4' style={{marginTop:'50px'}}>
                                    <div className='col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12'>
                                      <IconButton icon={faGooglePlay} href="www.google.com" text="Google Play" className='m-1' />
                                    </div>
                                    <div className='col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12'>
                                      <IconButton icon={faAppStore} href="www.apple.com" text="App Store" className='m-1' />
                                    </div>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
                <Container fluid>     
                    <div className='d-flex justify-content-center'>
                    <div class="horizontal-scroller m-0" style={{width:window.innerWidth-30, backgroundColor:'transparent',justifyContent:'center'}}>
                        <div class="option-content p-0">
                            {categories.map((category, index) => (
                                <div key={index} className="-option-item p-0 m-0">
                                    <Btn className="s-btn" text={category.name} style={{backgroundColor:'white'}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                    
                    <div className="col row p-0 m-0">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                        <h6 className="card-title ms-0">Trending</h6>
                        <div className="image-grid mb-3">
                                <img src="https://picsum.photos/200/150?random=2" alt="Book 1" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random4" alt="Book 2" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=5" alt="Book 3" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=6" alt="Book 4" className="grid-image" />
                            </div>
                        <Btn to="#" text="See more" className='mb-0 ml-0' />
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                        <h6 className="card-title ms-0">Top Ranking</h6>
                        <div className="image-grid mb-3">
                                <img src="https://picsum.photos/200/150?random=7" alt="Book 1" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=8" alt="Book 2" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=9" alt="Book 3" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=10" alt="Book 4" className="grid-image" />
                            </div>
                        <Btn to="#" text="See more" />
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                        <h6 className="card-title ms-0">Recommended</h6>
                        <div className="image-grid mb-3">
                                <img src="https://picsum.photos/200/150?random=11" alt="Book 1" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=12" alt="Book 2" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=13" alt="Book 3" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=14" alt="Book 4" className="grid-image" />
                            </div>
                        <Btn to="#" text="See more" />
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
                    <div className="card ">
                        <div className="card-body">
                        <h6 className="card-title ms-0">Unexpected</h6>
                        <div className="image-grid mb-3">
                                <img src="https://picsum.photos/200/150?random=15" alt="Book 1" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=16" alt="Book 2" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=17" alt="Book 3" className="grid-image" />
                                <img src="https://picsum.photos/200/150?random=18" alt="Book 4" className="grid-image" />
                            </div>
                        <Btn to="#" text="See more" />
                        </div>
                    </div>
                    </div>
                    
                    
                </div>
                <div>
                    <h4 className=' m-2 ms-3 mt-4'>Brands</h4>
                    <div className='d-flex justify-content-center'>
                    <div class="horizontal-scroller" style={{width:window.innerWidth-30}}>
                        <div class="scroll-content">
                            {companyBrands.map((companyBrand, index) => (
                                <div key={index} className="-scroll-item-one ">
                                    <img src={companyBrand.logo} alt=''/>
                                    
                                    <h6 className='mb-0 mt-1'>{companyBrand.brand}</h6>
                                
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                    
                </div>
                    <div>
                        <h4 className='m-2 ms-3 mt-4'>New Arrivals</h4>
                        <div className='d-flex justify-content-center'>
                        <div class="horizontal-scroller" style={{width:window.innerWidth-30}}>
                            <div class="scroll-content">
                                {products.map((product, index) => (
                                    <div key={index} className="-scroll-item">
                                    <img src={product.image} alt='' />
                                    <h6 className='mb-0'>{product.name}</h6>
                                    <h5 className='mt-1'>
                                        {product.price}<br />
                                        <Btn to="#" text="See more" className='m-2' />
                                    </h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
            <Container>
            
                
            <div className="row p-1 m-0">
              {filteredData.slice(previousPage*postsPerPage, currentPage*postsPerPage).map((item, index) => (
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
            </Container>
            <Footer className='footer'/>
        </div>
    );
}
export default Product;
