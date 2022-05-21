import React from 'react';
import Card from '../Card/Card.jsx'
import style from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  return (
    <div className={style.cards}>
      {
        cities.map( city => (
          <Card 
            key={city.id}
            temp={city.temp}
            max={city.max} 
            min={city.min}
            humidity={city.humidity} 
            name={city.name} 
            id={city.id}
            img={city.img} 
            onClose={() => onClose(city.id)}
          />
        ))         
      }
    </div>
  )
};
