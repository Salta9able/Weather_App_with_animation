import React from 'react'

function City({handleSelect}) {
    return (
        <div>
            <label className="city_label" htmlFor="city">Choose a city:</label>

            <select className="city_select" name="city" id="city" onChange={handleSelect}>
            <option value="new york">New York</option>
            <option value="london">London</option>
            <option value="tokyo">Tokyo</option>
            <option value="moscow">Moscow</option>
            </select>
        </div>
    )
}

export default City
