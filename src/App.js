// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/pages/home';
import About from './components/pages/about'; 
import UncontrolledExample from './components/pages/weedings';
import BabyBump from './components/pages/babybump';
import SareeFunction from './components/pages/sareefunction';
import Contact from './components/pages/contact';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/weddings' element={<UncontrolledExample></UncontrolledExample>}></Route>
            <Route path='/babybump' element={<BabyBump></BabyBump>}></Route>
            <Route path='/sareefunction' element={<SareeFunction></SareeFunction>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
