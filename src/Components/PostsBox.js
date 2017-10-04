import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DataActions from '../flux/actions/DataActions.js';
import DataStore from '../flux/stores/DataStore.js';
import PostOnHome from './PostOnHome';

//!!!!! Will probably need to update this before ready for production!!!!
function catMap(catPath){
    let categories = {
        'uncategorized':1,
        'player-analysis':2,
        'prospects':3,
        'roster-construction':4,
        'trade-analysis':5
    };
    return categories[catPath];
}
//NON_PRODUCTION_READY_BLOCK^^^

export default class PostsBox extends Component{

    state = {
        data: []
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
        else{ //results already come back as most recent at index 0
            DataActions.getPages(()=>{
                this.setState({
                    data: DataStore.getAllPosts()
                });
            });
        }
    }

    render(){

        const posts = this.state.data.map((post, index) => {
            console.log(post);
            return(
                <PostOnHome 
                    key = {post.id}
                    title = {post.title.rendered}
                    excerpt = {post.excerpt.rendered}
                />
            );
        });

        //The rows will each take the next 3 posts in the posts array
        return(
            <div className="posts-box-container">
                <Grid>
                    <Row>{posts}</Row>
                </Grid>
            </div>
        );
    }
}