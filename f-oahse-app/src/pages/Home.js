import logo from '../logo.svg';
//import './App.css';

import './Home.css';
import '../setting/opensanregular.css'
import Header from './Header';
import Body from './Body';

function Home() {
    const name = "Home"
    return (
        <div>
            <Header parent={name} />
            <Body/>
        </div>
    );
};

export default Home;