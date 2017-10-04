import React, {Component} from 'react';
import {Grid, Row, Button} from 'react-bootstrap';
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
        data: [],
        postLastIndex: 9
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
        let needNext = false;

        const posts = this.state.data.map((post, index) => {
            if(index<this.state.postLastIndex){
                return(
                    <PostOnHome 
                        key = {post.id}
                        title = {post.title.rendered}
                        excerpt = {post.excerpt.rendered}
                    />
                );
            }else{
                needNext=true;
            }
        });

        let nextButton = (
            <div className="text-center">
                <Button 
                    className="next-btn" 
                    bsSize="large"
                    onClick={() => this.setState({
                        postLastIndex: this.state.postLastIndex+9
                        })}>
                    See More Posts
                </Button>
            </div>);//Button will only be visible if there are more posts to show
            //We will get up to 90 posts.  Everything else must be accessed by either search or archive.

        return(
            <div className="posts-box-container">
                <Grid>
                    <Row>{posts}</Row>
                </Grid>
                {needNext ? nextButton : ""}
            </div>
        );
    }
}