import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require("./js/scroll.js");
require("./js/scroll_offset.js");

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);