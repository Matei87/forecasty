import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Form.css';


const Form = () => {
    const { api_call } = useContext(GlobalContext);
    const [location, setLocation] = useState('');

    const onSubmitAction = (e) => {
        e.preventDefault();
        api_call(e.target[0].value);
        setLocation('')
    }
    const onChangeForm = (e) => {
        setLocation(e.target.value)
    }

    return (
        <div className="weather-search">
            <form onSubmit={onSubmitAction} className="weather-search__form">
                <input
                    autoComplete="off"
                    type="text"
                    className="weather-search__input"
                    name="location"
                    value={location}
                    onChange={onChangeForm.bind(this)}
                />
                <div className="weather-search__submit">
                    <button className="weather-search__button">&rarr;</button>
                </div>
            </form>
        </div>
    )
}

export default Form;