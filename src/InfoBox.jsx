import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
    const INIT_URL =
        "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  
    let info = {
        city: "Delhi",
        feelsLike: 40.06,
        humidity: 58,
        temMax: 33.5,
        temMin: 33.5,
        temp: 33.5,
        weather: "heavy intensity rain"
    };

    return (
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
    <div className='CardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.temMin}&deg;C</p>
            <p>Max Temp = {info.temMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {" "} {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
  </div>
</div>

    );
}