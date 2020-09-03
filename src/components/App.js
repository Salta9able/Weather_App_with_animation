import React from 'react';
import Display from './Display';
import Panel from './Panel';
// import temperature from './database';

function App() {
    const [currentId, setCurrentId] = React.useState(0)

    const [data, setData] = React.useState([])
    const APIkey = ''

    const handleClick = (id) => {
        setCurrentId(id)
        
    }

    React.useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=42.492039&lon=78.381821&
            exclude=current,minutely,hourly&units=metric&appid=${APIkey}`
        ).then(response => response.json())
         .then(json => setData(json.daily))
    }, [])

    console.log(data)
    return(
        <div className="wrapper">
          <div className="table">
            {data.map((item, index) => (
                <Panel 
                    condition={item.weather[0].main} 
                    date={new Date(item.dt*1000)} 
                    description={item.weather[0].description}
                    iconURL={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    key={item.dt} id={index} handleClick={handleClick}
                    temp={item.temp.day}/>
             ))}
            </div>
            
            {
                data.length == true && <Display info={data.length === 0 ? {} : data.find((item, index) => index === currentId)} /> 
            }
            
        </div>
        
    )
}


export default App;
