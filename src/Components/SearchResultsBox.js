import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataActions from '../flux/actions/DataActions.js';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';

class SearchResultsBox extends Component{

    static propType={
        query: PropTypes.string.isRequired 
    };

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    componentDidMount(){
        DataActions.getPages(() => {
            this.setState({
                searchRes: DataStore.getAllSearchResults(),
                currQuery: this.props.query
            });
        },this.props.query);
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default connectToStores(SearchResultsBox);