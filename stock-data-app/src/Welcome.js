import React from 'react';
import './App.css';

function Welcome(props) {
    
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay;
    let classNameValue;
    const display = true;

    if (hour < 12) {
        timeOfDay = 'morning'
        classNameValue = 'Morning'
    }

    if (hour > 12 && hour <= 17) {
        timeOfDay = 'afternoon'
        classNameValue = 'Afternoon'
    }

    else {
        timeOfDay = 'night'
        classNameValue = 'Night'
    }

    return (
        <div>
            {
                display ?
                <h2 className={classNameValue}>Good {timeOfDay}, {props.first} {props.last}!</h2>:
                null
            }
        </div>
    )
}

export default Welcome;