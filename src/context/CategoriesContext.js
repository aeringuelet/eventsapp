import React, { Component } from 'react';
import axios from 'axios';

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {    
    token = "AQNWDCDWIS5P7ZN7EWLQ";

    state = { 
        categories: []
     }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

        let response = await axios.get(url);

        this.setState({
            categories: response.data.categories
        })
    }

    render() { 
        return ( 
            <CategoriesContext.Provider
                value={{
                    categories: this.state.categories
                }}
            >
                {this.props.children}

            </CategoriesContext.Provider>
         );
    }
}
 
export default CategoriesProvider;