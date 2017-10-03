import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataActions from '../flux/actions/DataActions.js';
import DataStore from '../flux/stores/DataStore.js';

function catMap(catPath){
    let categories = {
        'player-analysis':3,
        'prospects':4,
        'roster-construction':5
    };
    return categories[catPath];
}

export default class PostsBox extends Component{

    state = {
        data: {}
    };

    static propTypes = {
        path: PropTypes.string.isRequired
    }

    componentDidMount(){
        this.getThePosts();
    }

    getThePosts(){
        if(this.props.path !== "most-recent"){
            DataActions.getPages(()=>{
                this.setState({
                    data: DataStore.getAllPosts()
                });
            },catMap(this.props.path));
        }
        else{
            DataActions.getPages(()=>{
                this.setState({
                    data: DataStore.getAllPosts()
                });
            });
        }
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}