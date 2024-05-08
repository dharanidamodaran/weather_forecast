import React, { useState } from 'react'
import './weatherapp.css'
import axios from 'axios'
import cloudy_icon from '../assests/cloudy.png'


let Apikey="3799630f02402b61f588930a19dc1db9";

   const WeatherApp=()=>{
   const [city,setCity]=useState("");
   const [data,setData]=useState("");

   const convertUnixTimestamp = (timestamp) => {
      const date = new Date(timestamp * 1000);
      return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });
  };
   const getData=async()=>{
   try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}`);
      setData(response.data);
   }
   catch(err){
      alert("Please Enter a city name!");
   }
}

   //return(
   //<div>
     // <div>
       //  <input type="text" value={city} onChange={e => setCity(e.target.value)} />
         //<button onClick={getData}>Submit</button>
      //</div>

      //<div>
         //   {data && (
      //<div>
        //    <h1>{data.name}, {data.sys.country}</h1> 
         //<div>
           // <div>Lat- {data.coord.lat}</div>
            //<div>Lon- {data.coord.lon}</div>
         //</div>
      //<div>
   //)}
   //</div>
//</div>
//);
//};

return (
<div className='main-container'>
   <div className='container'>
      <div className='top-bar'></div>
      <div><h2 className='title'>Weather Forecast!</h2></div>
      <div> 
         <input className='text-box' type="text" value={city}  placeholder="search city"onChange={e => setCity(e.target.value)} />
         <button className="btn btn-outline-warning submit-button"onClick={getData}>Submit</button>
      </div>
      <div >
         {data && (
            <div className='cloud'>
               <img src={cloudy_icon} className='icon' alt="" />
               <h1 className='head'><i class="bi bi-geo-alt map"></i>{data.name}, {data.sys.country}</h1> 
               <div className='lat'>
               <div className='latitude'><i class="bi bi-sunrise rise"></i>Sunrise- {convertUnixTimestamp(data.sys.sunrise)}</div>
               <div className='longit'><i class="bi bi-sunset set"></i>Sunset- {convertUnixTimestamp(data.sys.sunset)}</div>
               </div>
            <div className='wind-temp'>
               <div className='wind'><i class="bi bi-tornado torn"></i>Wind- {data.wind.speed} km/h</div>
               <div className='temp'><i class="bi bi-thermometer-half therm"></i>Temp- {Math.round(data.main.temp -273.15)} °C</div>
      </div>
         <div>
            <div className='humi'><i className="bi bi-wind space"></i>Humidity - {data.main.humidity}</div>
         </div>
      </div>
   )}
      </div>
   </div>
</div>
);
}

export default WeatherApp;