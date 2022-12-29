import { useState } from 'react';
import './App.css';

function Carousel({images}) {

  const [picture, setPicture] = useState(0);

  const previousPicture = () => {
    setPicture ( picture =>{
      picture --;
      if (picture<0){
      picture=images.length -1;
      }
      return picture;
    })
  }
  const nextPicture = () => {
    setPicture (picture =>{
      picture ++;
      if (picture > images.length - 1){
        picture=0;
      }
      return picture;
      })
  }
  return (<div className="slider">
      <div className= "block">
        <button className="nextBtn" onClick={previousPicture}>Previous</button>
      </div> 

      <div className="block">
        <img className="pic" src={images[picture]} alt="visit place"/>
      </div>

      <div className="block">
        <button className="nextBtn" onClick={nextPicture}>Next</button>
      </div>
    </div>);
}
export default Carousel;
