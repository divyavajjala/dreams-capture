// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/pages/home';
import About from './components/pages/about'; 
import WeddingShootCarousel from './components/pages/weedings';
import BabyBump from './components/pages/babybump';
import SareeCeremony from './components/pages/sareefunction';
import Candid from './components/pages/candid';
import Live from './components/pages/Live';
import Postwedding from './components/pages/postwedding';
import Artists from './components/pages/makeup';
import Contact from './components/pages/contact';
import Footer from './components/footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/weddings' element={<WeddingShootCarousel></WeddingShootCarousel>}></Route>
                <Route path='/babybump' element={<BabyBump></BabyBump>}></Route>
                <Route path='/sareefunction' element={<SareeCeremony></SareeCeremony>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/candid' element={<Candid></Candid>}></Route>
                <Route path='/postwedding' element={<Postwedding></Postwedding>}></Route>
                <Route path='/live' element={<Live></Live>}></Route>
                <Route path='/makeup' element={<Artists></Artists>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
        <div className='whats-app'>
            <a className="whats-app-Icon" href="https://wa.me/919849075327?text=" target='_blank' rel='noopener  noreferrer'><WhatsAppIcon></WhatsAppIcon></a>
        </div>
        <div className='phone'>
            <a  className="phone-Icon" href="tel: +91 9849075327" target='_blank' rel='noopener  noreferrer'><PhoneEnabledIcon></PhoneEnabledIcon></a>
        </div>
    </div>
  );
}

export default App;
