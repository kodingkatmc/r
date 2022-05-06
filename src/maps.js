import './css/page.css';
import './css/carousel.css';
import { useEffect } from 'react';

function Maps() {
  document.title = "KodingKat - Maps";
  
  useEffect(() => {
    require("./js/carousel.js");
  });

  return (
    <div id="holder">
      <h1 class="title center">Maps</h1>
      <div class="content content_sub">
        <div class="c_left_s">
          <h2>Safe House</h2>
          <p>A puzzle map where you are trying to get the treasure hidden inside of a trapped and secured house.</p>
          <a class="link center download" download="Safe House.zip" href={require('./data/maps/Safe House.zip')}>Download Map</a>
        </div>
        <div class="c_right_l carousel">
          <img alt="safe house" src={require('./images/safe_house/0.jpg')}/>
          <img alt="safe house" src={require('./images/safe_house/1.jpg')}/>
          <img alt="safe house" src={require('./images/safe_house/2.jpg')}/>
          <img alt="safe house" src={require('./images/safe_house/3.jpg')}/>
        </div>
      </div>
    </div>
  );
}

export default Maps;
