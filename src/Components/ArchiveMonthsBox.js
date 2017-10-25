import React, {Component} from 'react';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import {numToMonth} from '../functions.js';
import {LinkContainer} from 'react-router-bootstrap';

class ArchiveMonthsBox extends Component{

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
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
        let archives=[];

        for(var key in archivedMonths){
            let route="/archive/"+key.slice(0,key.indexOf(" "))+"/"+key.slice(key.indexOf(" ")+1,key.length);

            archives.push(
                <LinkContainer key={key} to={route}>
                    <div className="post-card">
                        <div className="archive-card-header">
                            <h4>
                                {key}
                            </h4>
                        </div>
                        <div className="post-card-content">
                            Post Count: {archivedMonths[key]}
                        </div>
                    </div>
                </LinkContainer>
            );
        }

        return(
            <div>
                {archives.length>0
                    ?
                    archives
                    :
                    (
                    <div className="post-card">
                        <div className="archive-card-header">
                            <h4>
                                {"Loading"}
                            </h4>
                        </div>
                        <div className="post-card-content">
                            Retreiving archive...
                        </div>
                    </div>
                    )}
            </div>
        );
    }
}

export default connectToStores(ArchiveMonthsBox);