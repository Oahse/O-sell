import { React, useState, useEffect, useRef, faEye, faCommentAlt,Link} from '../components/all_imports';
import './Find.css';
import '../setting/opensanregular.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavBar from '../components/MobileSideBar';
import Btn from '../components/Button';
import { Map } from '../map/Map';
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
      { 
          name: "John Doe", 
          profession: "Software Engineer", 
          degree: "Computer Science", 
          age: 32, 
          picture: "https://randomuser.me/api/portraits/men/1.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "Jane Doe", 
          profession: "Doctor", 
          degree: "Medicine", 
          age: 29, 
          picture: "https://randomuser.me/api/portraits/women/2.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "Alice Smith", 
          profession: "Teacher", 
          degree: "Education", 
          age: 35, 
          picture: "https://randomuser.me/api/portraits/women/3.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "Bob Johnson", 
          profession: "Mechanical Engineer", 
          degree: "Mechanical Engineering", 
          age: 40, 
          picture: "https://randomuser.me/api/portraits/men/4.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "Emily Brown", 
          profession: "Nurse", 
          degree: "Nursing", 
          age: 27, 
          picture: "https://randomuser.me/api/portraits/women/5.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "Michael Wilson", 
          profession: "Architect", 
          degree: "Architecture", 
          age: 38, 
          picture: "https://randomuser.me/api/portraits/men/6.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "Sophia Martinez", 
          profession: "Psychologist", 
          degree: "Psychology", 
          age: 31, 
          picture: "https://randomuser.me/api/portraits/women/7.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "David Lee", 
          profession: "Accountant", 
          degree: "Accounting", 
          age: 45, 
          picture: "https://randomuser.me/api/portraits/men/8.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "Olivia Taylor", 
          profession: "Lawyer", 
          degree: "Law", 
          age: 33, 
          picture: "https://randomuser.me/api/portraits/women/9.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      },
      { 
          name: "William Clark", 
          profession: "Civil Engineer", 
          degree: "Civil Engineering", 
          age: 37, 
          picture: "https://randomuser.me/api/portraits/men/10.jpg", 
          latitude: 6.5244 + Math.random() * 0.5 - 0.25, 
          longitude: 3.3792 + Math.random() * 0.5 - 0.25
      }
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
        <div className='find'>
            <Header parent={name} iconColor={iconColor} navbarBg={navbarBg} linkstyles={linkstyles} />
            <div className='mini-navbar ms-auto'>
                <Search items={['ddcdcc','helo','hehere']} onClick={handleSearch} onKeyDown={handleSearch} value=" "/>
            </div>
            <SideNavBar iconColor={iconColor}/>
            <Map className='mb-2' items={filteredData} />
            <div>
              <h6 className='ms-1 mt-1'>Engineers</h6>
              <div class="-map-horizontal-scroller" style={{width:window.innerWidth-30}}>
                      <div class="-map-scroll-content">
                          {filteredData.map((person, index) => (
                              <div key={index} className="-map-scroll-item-one ">
                                  <img src={person.picture} alt=''/>
                                  
                                  <h6 className='mb-0 mt-1'>{person.name}</h6>
                                  <h6 className='mb-0 mt-1 fw-bold' >{person.profession}</h6>
                              
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
            
            <Footer className='footer'/>
        </div>
    );
}
export default Find;
