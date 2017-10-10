import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataActions from '../flux/actions/DataActions.js';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import {Row} from 'react-bootstrap';
import SearchResult from './SearchResult';

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

    onBackButtonEvent(event){
        this.popstate = true;
        DataActions.getPages(() => {
            this.setState({
                searchRes: DataStore.getAllSearchResults(),
                currQuery: this.props.query
            });
        },this.props.query);
    }

    componentDidMount(){
        this.popstate = false;
        window.onpopstate = this.onBackButtonEvent.bind(this);
        if(!this.popstate){
            DataActions.getPages(() => {
                this.setState({
                    searchRes: DataStore.getAllSearchResults(),
                    currQuery: this.props.query
                });
            },this.props.query);
        }
    }

    getResultCards(result){

        return(
            <SearchResult 
                key = {result.id}
                id = {result.id}
                title = {result.title.rendered}
                excerpt = {result.excerpt.rendered}
                urlExtension = {
                    "0"+
                    "/"+result.date.slice(0,4)+
                    "/"+result.date.slice(5,7)+
                    "/"+result.date.slice(8,10)+
                    "/"+result.slug+"/"
                    }
            />
        );
    }

    render(){
        return(
            <Row>
                {(this.props.data.searchRes&&this.props.data.searchRes[0]!==undefined)
                ? this.props.data.searchRes.map((singleResult,index)=>{
                        return(
                            this.getResultCards(singleResult)
                            );
                        }) 
                : 
                ''}
            </Row> 
        );
    }
}

export default connectToStores(SearchResultsBox);