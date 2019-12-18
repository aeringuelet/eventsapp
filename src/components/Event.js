import React from 'react';

const Event = (event) => {
    // due to the fact that the endpoint used to retrieve and render the information for this project
    // the html rendered on this component is assuming that the object received is using the structure
    // used below
    return ( 
        <div>
            <img src={event.imgSource} alt={event.name}/>
            <h3>
                {event.name}
            </h3>
            <p>
                {event.description}
            </p>
        </div> 
    );
}
 
export default Event;