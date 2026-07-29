import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 40.06,
        humidity: 58,
        temMax: 33.5,
        temMin: 33.5,
        temp: 33.5,
        weather: "heavy intensity rain"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Anas</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}