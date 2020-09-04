import React from 'react';
import gsap from 'gsap';

function Panel({condition, date, iconURL, id, handleClick, temp }) {
    const ref = React.useRef();
    
    React.useEffect(() => {
        const del = Number(id)*0.05 + 0.5;
        const tl = gsap.timeline();
        tl.from(ref.current, {duration: 2, opacity: 0, x: '1000px', delay: del})
    }, [id]);

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    return(
        <div className="card-list" onClick={() => handleClick(id)} ref={ref}>
            <div>
                <span className="day">{monthNames[date.getMonth()]}</span>
                <p className="day">{date.getDate()}</p>
            </div>
            
            <div><img src={iconURL} alt="weather_icon"/></div>
            <p>{condition}</p>
            
            <p className="temperature">{temp} °C</p>
        </div>
    )
}

export default Panel;