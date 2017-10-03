import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataActions from '../flux/actions/DataActions.js';
import DataStore from '../flux/stores/DataStore.js';

//!!!!! Will need to update this before ready for production!!!!
function catMap(catPath){
    let categories = {
        'uncategorized':1,
        'player-analysis':3,
        'prospects':4,
        'roster-construction':5,
        'trade-analysis':6
    };
    return categories[catPath];
}
//NON_PRODUCTION_READY_BLOCK^^^

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
        console.log(this.state.data);
        console.log(this.props.path);
        return(
            <div>
            </div>
        );
    }
}