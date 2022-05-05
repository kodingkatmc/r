import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import Page from './page';
import Footer from './footer';
import './css/styles.css';
require("./js/scroll.js");

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Page/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);