import React, { Component } from 'react';
import Axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
    token = "AQNWDCDWIS5P7ZN7EWLQ";

    state = { 
        events: []
    }

    searchEvents = async ({name, category}) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?token=${this.token}&q=${name}&categories=${category}`;

        const events = await Axios(url);
        
        this.setState({
            events: events.data
        })
        console.log(events);
    }

    render() { 
        return ( 
            <EventsContext.Provider
                value={{
                    events: this.state.events,
                    searchEvents: this.searchEvents
                }}
            >
                {this.props.children}
            </EventsContext.Provider> 
        );
    }
}
 
export default EventsProvider;