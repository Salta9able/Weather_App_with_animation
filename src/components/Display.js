import React from 'react';
import gsap from 'gsap';

function Display(props) {
    const displayRef = React.useRef();
    const wrapperRef = React.useRef();
    const {temp, condition, day, date} = props.info;
    
    React.useEffect(
       () => {
            const tl = gsap.timeline();
            tl.from(displayRef.current, {duration: 0.5, opacity: 0, ease: 'ease'}, 'first')
            .from(wrapperRef.current, {duration: 0.3, x: 50, opacity: 0}, 'first+=0.4')
       } 
    );

    let classChange;

    if (condition === 'Rain') {
        classChange = 'card-left card-left_rain'
    }
    else if (condition === 'Cloudy') {
        classChange = 'card-left card-left_cloudy'
    }
    else {
        classChange = 'card-left card-left_sunny';
    }

    return(
     <div className="display-card">
         <div className={classChange} ref={displayRef}>
             <div className="card-wrapper" ref={wrapperRef}>
                <h2>{temp} C'</h2>
                <h4>{condition}</h4>
             </div>
         </div>
         <div className="card-right">
             <p>{day}</p>
             <p>{date}</p>
             
         </div>
     </div>
    )
}

export default Display;