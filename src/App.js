import {
  HashRouter,
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


function App() {

  return (
    <div id="app">
      
      <HashRouter>
    
        <Navbar/>
        <img alt="splash" id="background" src={require('./images/background.jpg')}/>

        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/datapacks'} element={<Datapacks/>} />
          <Route path={'/resourcepacks'} element={<Resourcepacks/>} />
          <Route path={'/maps'} element={<Maps/>} />
          <Route path={'/videos'} element={<Videos/>} />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;