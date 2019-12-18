import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext';
import { EventsConsumer } from '../context/EventsContext';

class Form extends Component {
    state = { 
        name: '',
        category: ''
    }

    handleDataChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() { 
        return ( 
            <EventsConsumer>
                {(value) => {
                    return (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                value.searchEvents(this.state);
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Search your event by name or category
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="name"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Name of event or city"
                                        onChange={this.handleDataChange}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select 
                                        className="uk-select"
                                        name="category"
                                        onChange={this.handleDataChange}
                                    >
                                        <option value="">-- Select a category --</option>
                                        <CategoriesConsumer>
                                            {({categories}) => {
                                                return (
                                                    categories.map(cat => (
                                                        <option key={cat.id} value={cat.id} data-uk-form-select>
                                                            {cat.name}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoriesConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input 
                                        type="submit" 
                                        className="uk-button uk-button-danger"
                                        value="Search"
                                    />
                                </div>
                            </div>

                        </form>
                    )
                }}
            </EventsConsumer>
        );
    }
}
 
export default Form;