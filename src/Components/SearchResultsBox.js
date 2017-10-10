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

        this.props.data.returned = false;
        this.props.data.searchRes = [{}];

        DataActions.getPages(() => {
            this.setState({
                searchRes: DataStore.getAllSearchResults(),
                currQuery: this.props.query
            });
        },this.props.query);
    }

    componentDidMount(){
        this.popstate = false;

        this.props.data.returned = false;
        this.props.data.searchRes = [{}];

        window.onpopstate = this.onBackButtonEvent.bind(this);
        if(!this.popstate){
            setTimeout(DataActions.getPages(() => {
                this.setState({
                    searchRes: DataStore.getAllSearchResults(),
                    currQuery: this.props.query
                });
            },this.props.query),500); //have a timeout here to stop race condition with the API fetch in App.js
            
        }
    }

    getResultCards(result=''){

        if(result.urlExtension==='/'){
            return(
                <SearchResult 
                    key = {result.id}
                    id = {result.id}
                    title = {result.title}
                    excerpt = {result.excerpt}
                    urlExtension = {'/'}
                />
            );
        }
    
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
                {
                    (!this.props.data.returned)
                    ?
                    ((this.props.data.searchRes!==undefined)
                        ?    
                        this.getResultCards({
                            id:-1,
                            title:'Searching',
                            excerpt: 'Looking for results...',
                            urlExtension: '/'
                        })
                        :
                        this.getResultCards({
                            id:-10,
                            title:'No Results - no data returned',
                            excerpt: 'There was an issue fetching the posts.  Please try again.',
                            urlExtension: '/'
                        }) 
                    )
                    :
                    ((this.props.data.searchRes[0]!==undefined)
                        ?
                        this.props.data.searchRes.map((singleResult,index)=>{
                            return this.getResultCards(singleResult);
                        })
                        :
                        this.getResultCards({
                            id:-10,
                            title:'No Results',
                            excerpt: 'No results found.  Try searching for something else.',
                            urlExtension: '/'
                        })
                    )
                }
            </Row> 
        );
    }
}

export default connectToStores(SearchResultsBox);