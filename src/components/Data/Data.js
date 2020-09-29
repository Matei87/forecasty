import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


const Data = () => {
    const { main, text, error } = useContext(GlobalContext);
    const celsius = (i) => {
        //convert from kelvin to celsius formula
        return (i - 273.15).toFixed(1);
    }
    //console.log(main)
    return (
        <> {
            main ? <div className="weather-data">
                <p className="weather__tagline">Weather forecast for <span className="weather-data__city">{text.name}</span></p>
                <div className="weather-data__box">
                    <span className="weather-data__property">
                        <p className="weather-data__title">Temperature</p>
                        <p className="weather-data__value">{celsius(main.temp)}°C</p>
                    </span>
                    <span className="weather-data__property">
                        <p className="weather-data__title">Humidity</p>
                        <p className="weather-data__value">{main.humidity + '%'}</p>
                    </span>
                    <span className="weather-data__property">
                        <p className="weather-data__title">Min/Max</p>
                        <p className="weather-data__value">{celsius(main.temp_min)}/{celsius(main.temp_max)}</p>
                    </span>
                </div>
            </div> : <p style={{ textAlign: 'center' }}>{error}</p>
        }
        </>
    )
}

export default Data;