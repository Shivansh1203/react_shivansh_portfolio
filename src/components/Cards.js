import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects Gallery</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Team cl_AI_mate
              It aims to predict the heat waves and AQI index for tier-2 cities in Telangana - 
          Adilabad, Nizamabad, Warangal, Karimnagar, and Khammam with a monthly frequency.'
              label='Machine Learning'
              path='/projects'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Team cl_AI_mate
              It aims to predict the heat waves and AQI index for tier-2 cities in Telangana - 
          Adilabad, Nizamabad, Warangal, Karimnagar, and Khammam with a monthly frequency.'
              label='Machine Learning'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Bye2Doubts'
              label='Web Development'
              path='/projects'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Hackathon Winner'
              label='Hackathon Winner'
              path='/achievements'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Alumni App'
              label='App Development'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
