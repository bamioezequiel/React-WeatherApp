import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

const styleNavLink = {
  color: '#fff',
};

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.card}>
      <div className={style.header}>
        <NavLink to={`/city/${props.id}`} style={styleNavLink}> <h4>{props.name}</h4> </NavLink>
        <button className={style.btn} onClick={props.onClose}>X</button>
      </div>

      <div className={style.temp}>
        <h4>{Math.round(props.temp)}º</h4>
        <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt={props.name} />
        <div>
          <p>Min {Math.round(props.min)}º</p>
          <p>Max {Math.round(props.max)}º</p>
        </div>
      </div>
    </div>
  )
};
