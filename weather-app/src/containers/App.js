import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Cards from '../components/Cards/Cards.jsx'
import Nav from '../components/Nav/Nav.jsx'
import About from '../components/About/About.jsx';
import City from '../components/City/City.jsx';

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then( (json) => {
      if(json.main !== undefined) {
        if(!cities.find( (el) => el.id === json.id)) {
          const city = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            humidity: json.main.humidity,
            img: json.weather[0].icon,
            id: json.id,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            weather: json.weather[0].main,
            clouds: json.clouds.all,
            latitud: json.coord.lat,
            longitud: json.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("La ciudad ya esta agregada");
        }
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <Route path='/'>
          <Nav onSearch={onSearch} />
        </Route>
        <Route exact path='/'>
          <Cards cities={cities} onClose={onClose}/>
        </Route>
        <Route path='/about' component={About} />
        <Route path='/city/:id' 
               render={ ({match}) => <City city={cities.find( (el) => el.id === parseInt(match.params.id))} />} />
    </div>
  );
}
