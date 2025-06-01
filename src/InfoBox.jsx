import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1709126669526-ef1412c4bb40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNjYXR0ZXJlZCUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1694475177170-31f58f5f3660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlciUyMGNpdHklMjB3aXRoJTIwc3VufGVufDB8fDB8fHww";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBjaXR5fGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1540458398062-9bbc39e99010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmV5JTIwd2VhdGhlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      {/* <h1>WeatherInfo - {info.weather}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">

              {info.city}
              {info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <SunnyIcon/>
                : <AcUnitIcon/>}
                
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>
                The Weather can be described as <b>{info.weather}</b> and feels
                like <b>{info.feelsLike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
