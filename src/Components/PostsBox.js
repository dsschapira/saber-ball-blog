import React, {Component} from 'react';
import {Grid, Row, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import PostOnHome from './PostOnHome';
import connectToStores from 'alt-utils/lib/connectToStores';

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

class PostsBox extends Component{
    
    constructor(){
        super();
        this.state ={
            postLastIndex:12,
            posts: []
        };
    }
    
    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    static propTypes = {
        path: PropTypes.string.isRequired
    }

    componentDidMount(){
        if(this.props.data.posts.length>0){
            this.getThePosts(); 
        }
    }

    getThePosts(){
        let retArr = [];
        if(this.props.data.posts[0]){
            if(this.props.path !== "most-recent"){
                retArr = DataStore.getPostByCat(catMap(this.props.path));
            }
            else{ //results already come back as most recent at index 0
                retArr = DataStore.getAllPosts();
            }
        }
        
        return retArr;
    }

    render(){
        console.log(this.props);
        let needNext = false;
        let posts = this.getThePosts();
        let postCards = posts.map((post, index) => {
        
            if(index < this.state.postLastIndex){

                return(
                    <PostOnHome 
                        key = {post.id}
                        id = {post.id}
                        title = {post.title.rendered}
                        excerpt = {post.excerpt.rendered}
                        urlExtension = {
                            post.date.slice(0,4)+
                            "/"+post.date.slice(5,7)+
                            "/"+post.date.slice(8,10)+
                            "/"+post.slug+"/"
                            }
                    />
                );
            }else{
                needNext=true;
                return "";
            }
        });

        let nextButton = (
            <div className="text-center">
                <Button 
                    className="next-btn" 
                    bsSize="large"
                    onClick={() => this.setState({
                        postLastIndex: this.state.postLastIndex+12
                        })}>
                    See More Posts
                </Button>
            </div>);//Button will only be visible if there are more posts to show
            //We will get up to 90 posts.  Everything else must be accessed by either search or archive.

        return(
            <div className="posts-box-container">
                <Grid>
                    <Row>{postCards}</Row>
                </Grid>
                {needNext ? nextButton : ""}
            </div>
        );
    }
}
export default connectToStores(PostsBox);