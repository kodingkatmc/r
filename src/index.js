import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require("./js/scroll.js");
//TODO: require("./js/carousel.js");
//TODO: require("./js/scroll_offset.js");
//TODO: #kkwa
//TODO: navbar highlight

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);