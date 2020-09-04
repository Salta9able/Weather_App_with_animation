import React from 'react';
import gsap from 'gsap';

function Display({info}) {
    const displayRef = React.useRef();
    const wrapperRef = React.useRef();
    
    React.useEffect(
       () => {
            const tl = gsap.timeline();
            tl.from(displayRef.current, {duration: 0.5, opacity: 0, ease: 'ease'}, 'first')
            .from(wrapperRef.current, {duration: 0.3, x: 50, opacity: 0}, 'first+=0.4')
       } 
    );

    let classChange;

    if (info.weather[0].main === 'Rain') {
        classChange = 'card-left card-left_rain'
    }
    else if (info.weather[0].main === 'Clouds') {
        classChange = 'card-left card-left_cloudy'
    }
    else {
        classChange = 'card-left card-left_sunny';
    }
       
    return(
     <div className="display-card">
         <div className={classChange} ref={displayRef}>
             <div className="card-wrapper" ref={wrapperRef}>
                <h2>{info.temp.day} °C</h2>
                <h4>{info.weather[0].description}</h4>
             </div>
         </div> 
         <div className="card-right">
            <p className="display_date">Date: {new Date(info.dt *1000).toDateString()}</p>
            <p>Wind speed: {info.wind_speed} m/s</p>
            <p>Cloudiness, %: {info.clouds}</p>
            <p>Humidity, %: {info.humidity}</p>
            <p>Real Feel: {info.feels_like.day}</p>
         </div>
         
     </div>
    )
}

export default Display;