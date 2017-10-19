import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import {LinkContainer} from 'react-router-bootstrap';
import {numToMonth, monthToNum} from '../functions.js';

class ArchivedPostsBox extends Component{

    static propTypes = {
        month: PropTypes.string,
        year: PropTypes.number
    }

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    constructor(){
        super();
    }

    filterPostsByDate(){
        let retArr = [];
        for(var i=0; i<this.props.posts.lenght;i++){
            let date = this.props.posts[i].date; //at this point it is a string of format YYYY-MM-DD`T`HH:MM:SS
            let year = parseInt(date.slice(0,4));
            let month = parseInt(date.slice(5,7));

            if(year===this.props.year){
                if(numToMonth(month)===this.props.month.toLowerCase()){
                    retArr.push(this.props.posts[i]);
                }
            }
        }

        return retArr;
    }

    render(){
        let filteredPosts = this.filterPostsByDate;

        let archivePosts = filteredPosts.map((post, index)=>{
            
        });
        return(
            <div>
                
            </div>
        );
    }
}

export default connectToStores(ArchivedPostsBox);