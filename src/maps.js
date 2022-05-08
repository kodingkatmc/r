import './css/page.css';

import Carousel from './carousel.js';
import Querys from './querys';

function Maps() {
  document.title = "KodingKat - Maps";

  return (
    <div id="holder">
      <Querys query="mp"/>
      <h1 className="title center">Maps</h1>
      <div className="content content_sub" id="safe_house">
        <div className="c_left_s">
          <h2>Safe House</h2>
          <p>A puzzle map where you are trying to get the treasure hidden inside of a trapped and secured house.</p>
          <a className="link center download" download="Safe House.zip" href={require('./data/maps/Safe House.zip')}>Download Map</a>
        </div>
        <div className="c_right_l">
          <Carousel folder="safe_house"/>  
        </div>
      </div>
    </div>
  );
}

export default Maps;
