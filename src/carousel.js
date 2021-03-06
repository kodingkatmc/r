import './css/carousel.css';

import { useEffect } from 'react';

import $ from 'jquery'

function Carousel(props) {
  let folder = props.folder;
  
  function iterSlides(carousel, index) {
    //Setup Stuf
    let changeWidth = '70vw';
    if(window.innerHeight < window.innerWidth){
        changeWidth = '39vw';
    }
    let slides = carousel.children;

    if (index > slides.length-1) index = 0;
    //console.log("slide: " + index);

    //Change Slides
    for(let c=0; c<slides.length; c++){
        $(slides[c]).css('z-index', -1);
    }

    $(slides[index]).css('z-index', 1);
    $(slides[index]).css('left', '-'+changeWidth);
    $(slides[index]).animate({left: '0'});
    if(index===0){
        $(slides[slides.length-1]).css('z-index', 0);
        $(slides[slides.length-1]).animate({left: changeWidth});
    }else{
        $(slides[index-1]).css('z-index', 0);
        $(slides[index-1]).animate({left: changeWidth});
    }

    //console.log(carousel.parentElement.parentElement.parentElement.parentElement);
    if(carousel.parentElement.parentElement.parentElement.parentElement !== null){
        setTimeout(iterSlides.bind(null, carousel, ++index), 3000);
    }
    
  }
  
  function importAll(r) {
    let images = {};
    //console.log(r.keys());
    r.keys().map((item, index) => { 
      images[item.replace('./', '')] = r(item);
      return null;
    });
    return images;
  }

  useEffect(()=>{
    const images = importAll(require.context("./images/", true, /\.jpg$/));
    //console.log(images);
    let carousel = document.getElementById(folder+"_carousel");
    
    for(const key in images){
      //console.log((images[key]).substring(16,16+folder.length));
      if((images[key]).substring(16,16+folder.length) === folder){
        //console.log(images[key]);
        $(carousel).append("<img alt="+folder+" src='"+images[key]+"'>");
      }      
    }
  
    iterSlides(carousel, 0);
  });

  return (
    <div className="carousel" id={folder+"_carousel"}>
    </div>
  );
}

export default Carousel;
