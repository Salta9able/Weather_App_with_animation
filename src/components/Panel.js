import React from 'react';
import gsap from 'gsap';

function Panel(props) {
    const ref = React.useRef();
    
    React.useEffect(() => {
        const del = Number(props.id)*0.05 + 0.5;
        const tl = gsap.timeline();
        tl.from(ref.current, {duration: 2, opacity: 0, x: '1000px', delay: del})
    }, [props.id]);

    return(
        <div className="card-list" onClick={() => props.handleClick(props.id)} ref={ref}>
            <h5>{props.condition}</h5>
            <div>
                <span className="day">{props.day}</span>
                <span className="day">{props.date}</span>
            </div>
            <p className="temperature">{props.temp}C</p>
        </div>
    )
}

export default Panel;