import { React, useState, useEffect, Container, Link } from '../components/all_imports';
import { Typography, Badge, Space, Breadcrumb, Modal, InputNumber} from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import IconButton from '../components/Iconbutton';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Bulb from '../assets/bulb.jpg';
import Car from '../assets/car.jpg';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Thumbs, FreeMode]);

const { Text } = Typography;

const ProductDetailsPage = () => {
    const name = "Product Details";
    const [thumbsSwiper, setThumbsSwiper] = useState(false);
    const url = useLocation();
    const [iconColor, setIconColor] = useState('black');
    const [navbarBg, setNavbarBg] = useState('light');
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [number, setNumber] = useState(0);
    
    const onChange = (value) => {
        setNumber(value);
    };
  
    
    const checkx = () => {
        console.log(startX);
        console.log(endX);
        // Check start and end points to determine slide direction
        if  (Math.abs(endX - startX)>50){
            if (startX < endX) {
                try{
                    handleThumbnailClick(handleThumbnailClick(activeIndex-1))
                }catch(err){console.log(err)}
                // Perform action for sliding left
            } else {
                try{
                    handleThumbnailClick(activeIndex+1)
                }catch(err){console.log(err)}
                // Perform action for sliding right
            }
        }  
    };

    const product = {
        id: 1,
        name: 'Product Name',
        price: 50,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Nulla congue magna ut lacus vehicula, vel tristique libero efficitur. \nNam non ipsum at mi pharetra aliquet.',
        imageUrls: [
            Bulb,
            Car,
            "https://picsum.photos/200/150?random=13",
            "https://picsum.photos/200/150?random=14",
            "https://picsum.photos/200/150?random=15",
            "https://picsum.photos/200/150?random=16",
            "https://picsum.photos/200/150?random=17",
            "https://picsum.photos/200/150?random=18",
            "https://picsum.photos/200/150?random=19"
        ]
    };

    const handleAddToCart = () => {
        // Add product to cart logic
    };
    const changeimage =(index)=>{
        setActiveIndex(index); 
    }
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSwiper = (swiper) => {
        if (swiper) {
            setSwiperInstance(swiper);
        }
    };
    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    useEffect(() => {
        const checkIfMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 767); // Adjust threshold as needed
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div>
            <Header iconColor={iconColor} navbarBg={navbarBg} />
            <div className='mini-navbar ms-auto'>
                <Breadcrumb className='m-4 mb-1'>
                    <Breadcrumb.Item><Link to='/' style={{ textDecoration: 'None' }}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to='/products' style={{ textDecoration: 'None' }}>Products</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>{url.pathname.replace('/products/', '')}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <SideNavBar iconColor={iconColor} />
            <Container fluid>
                <div className='row  mb-5' >
                    <div className='col-md-6 col-sm-12'>
                        {isMobile? 
                            <div onTouchStart={(event) => setStartX(event.touches[0].clientX)} onTouchEnd={(event) => {
                                setEndX(event.changedTouches[0].clientX);
                                checkx();
                            }}
                             className='p-0 m-0 bg-cover rounded-1 relative d-flex justify-content-center align-items-end' style={{ backgroundImage: `url(${product.imageUrls[activeIndex]})`, height: '300px',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '94vw' }}>
                                <Space
                                    className='py-0 px-2 m-3 rounded-1'
                                    style={{
                                        zIndex:'10'
                                    }}
                                >
                                    {product.imageUrls.map((imageUrl, index) => (
                                        <Badge key={index} size='default' status={activeIndex === index ? 'warning' : 'default'}
                                        className='ms-auto' onClick={()=>(changeimage(index))} style={{cursor:'pointer'}} />
                                    ))}
                                </Space>
                            </div>
                            :
                            <div>
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    className="productdetailsimage1"
                                    style={{ marginTop: '6px', height: '320px' }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    onSwiper={handleSwiper}
                                >
                                    {product.imageUrls.map((imageUrl, index) => (
                                        <SwiperSlide key={index} id={`${index}`} style={{height:'320px'}}  className='d-flex justify-content-center'>
                                            <img src={imageUrl} alt={product.name} className='rounded-1 m-1 img-fluid' onClick={() => handleThumbnailClick(index)} style={{cursor:'pointer'}} />

                                            <div className='position-absolute top-0 end-0 m-2 text-warning'>
                                                <i class="fa-regular fa-eye" style={{cursor:'pointer'}}></i>
                                            </div>

                                        </SwiperSlide>
                                    ))}
                                    {/* Modal */}
                                    <Modal show={showModal} onHide={()=>setShowModal(false)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{product.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <img src={product.imageUrls[activeIndex]} alt={product.name} className="img-fluid" />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <IconButton text='Close' onClick={()=>setShowModal(false)} />
                                        </Modal.Footer>
                                    </Modal>
                                </Swiper>
                                
                                <div className='rounded-1 p-1 horizontal-scroller'>
                                    {product.imageUrls.map((imageUrl, index) => (
                                        <img src={imageUrl} alt={`Product Image ${index}`} className={activeIndex === index ? 'rounded-1 m-1 swiper-slide-active' : 'rounded-1 m-1'} height='80px' onClick={() => handleThumbnailClick(index)} style={{cursor:'pointer'}} />
                                    ))} 
                                </div>
                                
                            </div>
                            }
                        
                        
                    </div>
                    <div className='col-md-6 col-sm-12 mt-2'>
                        <Text strong className='lead'>${product.price}</Text><span> </span><small style={{ textDecoration: 'line-through', color: 'red' }}>{product.price}</small>
                        <h2>{product.name}</h2>
                        <Text strong>Seller:<small>Henrico</small></Text>
                        <p>{product.description}</p>
                        <div className='d-flex justify-content-end ms-auto'>
                            <div className='m-1'>
                                <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />
                            </div>
                            <IconButton to="#" text="Add to Cart" className='m-0 text-dark' onClick={handleAddToCart} />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer className='footer' />
        </div>
    );
};

export default ProductDetailsPage;
