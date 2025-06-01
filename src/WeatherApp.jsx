import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Indore",
        feelsLike: 29.99,
        humidity: 19,
        temp: 32.07,
        tempMax: 32.07,
        tempMin: 32.07,
        weather: "scattered clouds",
      });

      let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
      };

    return (
        <div style={{textAlign: 'center'}}>
            <h2>WEATHER APP</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo} />
        </div>
    )
}