import { useState } from 'react';
import { data } from './data';
import './App.css';

function Carousel({images}) {

  const [picture, setPicture] = useState(images);

  const previousPicture = () => {
    setPicture ( picture =>{
      picture --;
      if (picture<0){
      picture=data.length -1;
      }
      return picture;
    })
  }

  const nextPicture = () => {
    setPicture (picture =>{
      picture ++;
      if (picture > data.length - 1){
        picture=0;
      }
      return picture;
      })
  }

  return (<div className="slider">

<div className="container">
        <button onClick={previousPicture}>Previous</button>
      </div>  
      <div className='container'>
        <img src={picture.images} width="300px" alt="person"/>
      </div>

      <div className="container">
        <button onClick={nextPicture}>Next</button>
      </div>
    </div>);
}

export default Carousel;
