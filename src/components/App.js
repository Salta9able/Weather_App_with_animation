import React from 'react'
import Display from './Display'
import Panel from './Panel'
import City from './City'
import cityarr from '../cityarr'

function App() {
    const [currentId, setCurrentId] = React.useState(0)
    const [currentCity, setCurrentCity] = React.useState(cityarr[0])

    const [data, setData] = React.useState([])
    const APIkey = ''

    const handleClick = (id) => {
        setCurrentId(id)
    }

    const handleSelect = (e) => {
		let chosenCity = cityarr.find(item => item.city == e.target.value)
		setCurrentCity(chosenCity)
    }

    React.useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${currentCity.lat}&lon=${currentCity.long}&
            exclude=current,minutely,hourly&units=metric&appid=${APIkey}`
        ).then(response => response.json())
         .then(json => setData(json.daily))
    }, [currentCity])

    
    return(
        <div className="wrapper">
            <div className="city">
                <City handleSelect={handleSelect}/>
            </div>
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
                data.length && <Display info={data.find((item, index) => index === currentId)} /> 
            }
            
        </div>
        
    )
}


export default App;
