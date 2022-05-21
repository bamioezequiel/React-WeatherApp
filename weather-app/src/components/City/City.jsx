import React from 'react';
import style from './City.module.css'

export default function City({city}) {
    return (
        <div className={style.city}>
                <div className={style.container}>
                    <h2 className={style.title}>{city.name}</h2>
                    <div className={style.temperature}>
                        <h2>{city.temp}º</h2>
                        <img src={`https://openweathermap.org/img/wn/${city.img}@2x.png`} alt={city.name} />
                    </div>
                    <div className={style.info}>
                        <div>
                            <p>Máx./Min.</p>
                            <p>{city.max}°/{city.min}°</p>
                        </div>
                        <div>
                            <p>Clima</p>
                            <p>{city.weather}</p>
                        </div>
                        <div>
                            <p>Viento</p>
                            <p>{city.wind}</p>
                        </div>
                        <div>
                            <p>Nubes</p>
                            <p>{city.clouds}</p>
                        </div>
                        <div>
                            <p>Humedad</p>
                            <p>{city.humidity}</p>
                        </div>
                        <div>
                            <p>Latitud</p>
                            <p>{city.latitud}</p>
                        </div>
                        <div>
                            <p>Longitud</p>
                            <p>{city.longitud}</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}