import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import {numToMonth} from '../functions.js';
import SearchResult from './SearchResult';

class ArchivedPostsBox extends Component{

    static propTypes = {
        month: PropTypes.string,
        year: PropTypes.string
    }

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    filterPostsByDate(){
        let retArr = [];
        if(this.props.data.posts){
            for(var i=0; i<this.props.data.posts.length;i++){
                let date = this.props.data.posts[i].date; //at this point it is a string of format YYYY-MM-DD`T`HH:MM:SS
                let year = parseInt(date.slice(0,4),10);
                let month = parseInt(date.slice(5,7),10);

                if(year===parseInt(this.props.year,10)){
                    if(numToMonth(month)===this.props.month.toLowerCase()){
                        retArr.push(this.props.data.posts[i]);
                    }
                }
            }
        }

        return retArr;
    }

    render(){
        let filteredPosts = this.filterPostsByDate();
        let archivePosts = filteredPosts.length>0 ? filteredPosts.map((post, index)=>{
            return(
                <SearchResult 
                    key={post.id}
                    id={post.id}
                    title={post.title.rendered}
                    excerpt={post.excerpt.rendered}
                    urlExtension={
                        "0"+
                        "/"+post.date.slice(0,4)+
                        "/"+post.date.slice(5,7)+
                        "/"+post.date.slice(8,10)+
                        "/"+post.slug+"/"
                    }
                />
            );
        }):
        <SearchResult 
            id={-1}
            title={"Loading"}
            excerpt={"Retreiving archived posts..."}
            urlExtension={""}
        />;

        return(
            <div>
                {archivePosts}
            </div>
        );
    }
}

export default connectToStores(ArchivedPostsBox);