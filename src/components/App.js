import React from 'react';
import Display from './Display';
import Panel from './Panel';
import temperature from './database';


class App extends React.Component {
    state = {
        currentId: 1
    };

    handleClick = (id) => {
        this.setState({
            currentId: id
        })
    }

    render() {
        return(
            <div className="wrapper">
              <div className="table">
                {temperature.map((item, index) => (
                    <Panel condition={item.condition} day={item.day} date={item.date} temp={item.temp} key={item.id} id={item.id} handleClick={this.handleClick} indexing={index}/>
                 ))}
                </div>
                
                <Display info={temperature.find(item => item.id === this.state.currentId)} />
            </div>
            
        )
    }
}

export default App;
