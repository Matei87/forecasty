import React, { useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

const GlobalState = (props) => {
    const [main, setMain] = useState('');
    const [text, setText] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState();

    const api_call = async (e) => {
        try {
            setLocation(e);
            if (!e) {
                return setError('Please enter the name of the city !'), setMain(null);
            }
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${process.env.REACT_APP_API_KEY}`;
            const request = axios.get(url);
            const response = await request;
            setMain(response.data.main);
            setText(response.data);

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    //console.log(location)
    useEffect(() => {
        api_call();
    }, [])
    //console.log(location);
    return (
        <GlobalContext.Provider
            value={
                {
                    api_call,
                    main,
                    text,
                    error

                }
            }>
            { props.children}
        </GlobalContext.Provider >
    )
}

export default GlobalState;