import React, { useState } from 'react'
import  './WeatherApp.css';
import search_icon from '../Asset/search.png';
import clear_icon from '../Asset/clear_icon.png'
import cloud_icon from '../Asset/cloud_icon.png';
import drizzle_icon from '../Asset/drizzle_icon.png';
import rain_icon from '../Asset/rain_icon.png';
import snow_icon from '../Asset/mist_icon.png';
import wind_icon from '../Asset/wind.png';
import humidity_icon from '../Asset/humidity .png';




export default function WeatherApp() {
     var [temp,setTemp]=useState('0');
     var [lattitude,SetLattitude]=useState('0');
     var [longitude,setLongitude]=useState('0');
     var [wind,setWind]=useState('0');
     var [humidity,setHumidity]=useState('0');
     var [location,setLocation]=useState('..Loading..');
     var [weatherIcon,setWeatherIcon]=useState('clear_icon');
  


     
    function apiCalling(){
          var p=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=00a575bc43fc3ff1b8663d2462ea39fe`)
        p.then((result)=>{
            var p1=result.json();
            p1.then((request)=>{
                console.log(request);
                setTemp(request.main.temp);
                setHumidity(request.main.humidity);
                setWind(request.wind.speed);
                setLocation(request.name);

                if(request.weather.icon=="02d" ||request.weather.icon=="02n"){setWeatherIcon(cloud_icon)}
                else if(request.weather.icon=="10d" ||request.weather.icon=="10n"){setWeatherIcon(rain_icon)}
                else if(request.weather.icon=="9d" ||request.weather.icon=="9n"){setWeatherIcon(drizzle_icon)}
                else if(request.weather.icon=="13d" ||request.weather.icon=="13n"){setWeatherIcon(snow_icon)}
                else if(request.weather.icon=="50d" ||request.weather.icon=="50n"){
                    setWeatherIcon(snow_icon)}

               else{
                    setWeatherIcon(clear_icon)
                }
    
              })
        })}
 
  return (
    


    <div className='container'>
        <div className='Title'><h3 >Weather_App</h3></div>
        <div className='top-bar'>
          <input type="text" className='cityInput' placeholder='Enter_latt' onChange={(e)=>SetLattitude(e.target.value)} />
          <input type="textr"  className='cityInput' placeholder='Enter_longt' onChange={(e)=>setLongitude(e.target.value)}/>

          <div className="search-icon" onClick={()=>{apiCalling()}} >
             <img src={search_icon} alt='Img_Not_Found'/>
           </div>
        </div>


        <div className='weather-image'>
            <img src={weatherIcon}alt="Img_Not_Found" ></img>
        </div>

        <div className='weather-temp'>{temp}</div>
        <div className='weather-location'>{location}</div>

        <div className='data-container'>

            <div className='element' >
                 <img src={humidity_icon} alt='' className='icon1'></img>
                 <div className='data'>
                    <div className='humidity-percentage'>{humidity}</div>
                    <div className='text'>Humidity</div>
                  </div>
            </div>

            <div className='element' >
                 <img src={wind_icon} alt='' className='icon2'></img>
                 <div className='data'>
                    <div className='wind-rate'>{wind}</div>
                    <div className='text'>Wind</div>
                  </div>
            </div>
        </div>
    
      </div>
    
  )
}
