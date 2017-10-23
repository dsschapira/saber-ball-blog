import React, {Component} from 'react';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import {numToMonth} from '../functions.js';

class ArchiveMonthsBox extends Component{

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    constructor(){
        super();
    }

    getMonthsArray(){
        let retObj = {};
        if(this.props.data.posts){
            for(var i=0; i<this.props.data.posts.length; i++){
                let date = this.props.data.posts[i].date; //at this point it is a string of format YYYY-MM-DD`T`HH:MM:SS
                let year = date.slice(0,4);

                let month = numToMonth(parseInt(date.slice(5,7),10));
                month = month.slice(0,1).toUpperCase()+month.slice(1,month.length);

                let postDate = month +" "+ year

                if(!retObj[postDate]){
                    retObj[postDate]=1;
                }
                else{
                    retObj[postDate]+=1;
                }
            }
        }


        return retObj;
    }


    render(){
        var archivedMonths = this.getMonthsArray();
        console.log(archivedMonths);
        return(
            <div>
            </div>
        );
    }
}

export default connectToStores(ArchiveMonthsBox);