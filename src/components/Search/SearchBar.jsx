import React, { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('');


  return (
    <form className={style.container} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input type="text" 
             className={style.search} 
             placeholder="Search city..." 
             value={city}
             onChange={ (e) => setCity(e.target.value) }
            />
      <input type="submit" className={style.btn} value="+" />
    </form>
  )
};
