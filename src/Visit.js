import { useState } from 'react';
import { data } from './data';
import Carousel from './Carousel';
import './App.css';


function Visit() {

const [places, setPlaces] = useState(data);
const [showText, setShowText] = useState(false);

const removePlace = (id) => {
  let newPlacesList = places.filter(place => place.id !==id);
  setPlaces(newPlacesList);
}

const showTextClick = (item) =>{
  item.showMore = !item.showMore
  setShowText (!showText)
}
  return (
    <div className="App">

      <header className="App-header">
        <h1>LIST OF {places.length} PLACES TO VISIT IN ISTANBUL.</h1>
      </header>



      <div className="item">
      {places.map((item => {
        const {id, placeName, description, source, images, showMore} = item;
        return(
          <div key={id}>
            <div className="container item">
              <h2>{placeName}</h2>
            </div>

            <div className="container">
              <p className="text">{showMore ? description : description.substring(0,100) + "...."}
              <button onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
            </div>

            <div className="container">
                <Carousel images = {images}/>
            </div>

            <div className="container">
              <p>Source: {source}</p>
            </div>

            <div className="container">
              <button className='btn' onClick={() => removePlace(id)}>remove</button>
            </div>

          </div>
          
        )
      }))}
</div>
            <div className="container">
              <button className='btn' onClick={() => setPlaces([])}>delete all</button>
            </div>

    </div>
  );
}

export default Visit;