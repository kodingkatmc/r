import './css/page.css';

function maps() {
  document.title = "KodingKat - Maps";

  return (
    <div id="holder">
      <h1 class="title center">Maps</h1>
      <div class="content content_sub">
        <div class="c_left_s">
          <h2>Safe House</h2>
          <p>A puzzle map where you are trying to get the treasure hidden inside of a trapped and secured house.</p>
          <a class="link center" download href="data/maps/Safe House.zip">Download Map</a>
        </div>
        <div class="c_right_l carousel">
          <img alt="safe house display image" src='images/safe_house/0.jpg'/>
          <img alt="safe house display image"src='images/safe_house/1.jpg'/>
          <img alt="safe house display image"src='images/safe_house/2.jpg'/>
          <img alt="safe house display image"src='images/safe_house/3.jpg'/>
        </div>
      </div>
    </div>
  );
}

export default maps;
