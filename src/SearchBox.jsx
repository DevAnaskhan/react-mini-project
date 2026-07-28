import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY ="e8f814907107d4767dde1626f6804b13";

    let getWeatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            temp: jsonResponse.main.temp,
            temMin: jsonResponse.main.temp_min,
            temMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                 <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}
