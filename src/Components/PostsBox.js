import React, {Component} from 'react';
import {Grid, Row, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import PostOnHome from './PostOnHome';
import connectToStores from 'alt-utils/lib/connectToStores';
import {catMap} from '../functions.js';


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
        if(this.props.data.posts&&this.props.data.posts.length>0){
            this.getThePosts(); 
        }
    }

    getThePosts(){
        let retArr = [];
        if(this.props.data.posts&&this.props.data.posts[0]){
            if(this.props.path !== "most-recent"){
                retArr = DataStore.getPostByCat(catMap(this.props.path));
            }
            else{ //results already come back as most recent at index 0
                retArr = DataStore.getAllPosts();
            }
        }
        else{
            retArr="loading";
        }
        return retArr;
    }

    render(){
        let needNext = false;
        let posts = this.getThePosts();
        let postCards;
        if(posts!=="loading"){
            postCards = posts.map((post, index) => {

                if(index < this.state.postLastIndex){
                    return(
                        <PostOnHome 
                            key = {post.id}
                            id = {post.id}
                            title = {post.title.rendered}
                            excerpt = {post.excerpt.rendered}
                            urlExtension = {
                                catMap(this.props.path)+
                                "/"+post.date.slice(0,4)+
                                "/"+post.date.slice(5,7)+
                                "/"+post.date.slice(8,10)+
                                "/"+post.slug+"/"
                                }
                            media = {post.featured_media!==0?DataStore.getMediaById(post.featured_media).source_url:"0"}
                        />
                    );
                }else{
                    needNext=true;
                    return "";
                }
            });
        }
        else{
            return(
                <div className="posts-box-container">
                    <Grid>
                        <PostOnHome 
                            id={-1}
                            title={"Loading"}
                            excerpt={"Gathering Posts..."}
                            urlExtension={""}
                        />
                    </Grid>
                </div>
            );
        }

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
        var allPostCards=[];
        for(var i=0;i<postCards.length;i=i+3){
            allPostCards.push(
                    <Row
                    key={i}>
                        {postCards[i]}
                        {postCards[i+1]?postCards[i+1]:""}
                        {postCards[i+2]?postCards[i+2]:""}
                    </Row>
                );
        } //ensure 3 cards per row
        return(
            <div className="posts-box-container">
                <Grid>
                    {allPostCards}
                </Grid>
                {needNext ? nextButton : ""}
            </div>
        );
    }
}
export default connectToStores(PostsBox);