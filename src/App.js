import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './navbar.js';
import Footer from './footer.js';
import Home from './home.js';
import Datapacks from './datapacks.js';
import Resourcepacks from './resourcepacks';
import Maps from './maps.js';
import Videos from './videos.js';
import './css/styles.css';

import splash_img from './images/background.jpg';

function app() {
  return (
    <div>
      <Navbar/>
      <img alt="splash" id="background" src={splash_img}/>

      <Router>
        <Routes>
          <Route exact path='/r/' exact element={<Home/>} />
          <Route path='/r/datapacks' element={<Datapacks/>} />
          <Route path='/r/resourcepacks' element={<Resourcepacks/>} />
          <Route path='/r/maps' element={<Maps/>} />
          <Route path='/r/videos' element={<Videos/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default app;