import React from 'react';
import { EventsConsumer } from '../context/EventsContext';
import Event from './Event';

const EventList = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventsConsumer>
                {(value) => {
                    value.events.map(event => (
                        <Event 
                            key={event.sourceUrl}
                            event={event}
                        />
                    ))
                }}
            </EventsConsumer>
        </div>
    );
}
 
export default EventList;