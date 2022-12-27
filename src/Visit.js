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
        <h1>ISTANBUL. LIST OF {places.length} PLACES TO VISIT.</h1>
      </header>

      {places.map((item => {
        const {id, placeName, description, source, showMore} = item;
        return(
          <div key={id}>
            <div className="container">
              <h2>{id} - {placeName}</h2>
            </div>

            <div className="container">
              <p>{showMore ? description : description.substring(0,100) + "...."}
              <button onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
            </div>

            <div className="container block">
                <Carousel/>
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

            <div className="container">
              <button className='btn' onClick={() => setPlaces([])}>delete all</button>
            </div>

    </div>
  );
}

export default Visit;