import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Anas</h2>
            <SearchBox/>
            <InfoBox/>
        </div>
    );
}