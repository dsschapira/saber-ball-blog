import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import {LinkContainer} from 'react-router-bootstrap';
import {numToMonth} from '../functions.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../styles/Post.css';
import ShareButtons from './ShareButtons.js';

class Post extends Component{

    static propTypes = {
        id: PropTypes.number.isRequired,
        category: PropTypes.number
    }

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    getURL(needed,direction,index){
        //direction is -1 for back, +1 for forward
        var url = "";
        if(!needed){
            return "";
        }
        if(this.props.category===0){
            url = "/posts/0/"+
            this.props.data.posts[index+direction].date.slice(0,4)+
            "/"+this.props.data.posts[index+direction].date.slice(5,7)+
            "/"+this.props.data.posts[index+direction].date.slice(8,10)+
            "/"+this.props.data.posts[index+direction].slug+
            "/"+this.props.data.posts[index+direction].id
        }
        else{
            if(direction>0){
                for(var i = index+1;i<this.props.data.posts.length;i++){
                    for(var j = 0; j<this.props.data.posts[i].categories.length;j++){
                        if(this.props.data.posts[i].categories[j]===this.props.category){
                            url = "/posts/"+this.props.category+
                            "/"+this.props.data.posts[i].date.slice(0,4)+
                            "/"+this.props.data.posts[i].date.slice(5,7)+
                            "/"+this.props.data.posts[i].date.slice(8,10)+
                            "/"+this.props.data.posts[i].slug+
                            "/"+this.props.data.posts[i].id

                            return url;
                        }
                    }
                }
                if(url===""){
                    this.needNext=false;
                    return "";
                }
            }
            else if(direction<0){
                for(var k = index-1;k>0;k--){
                    for(var m=0; m<this.props.data.posts[k].categories.length;m++){
                        if(this.props.data.posts[k].categories[m]===this.props.category){
                            url = "/posts/"+this.props.category+
                            "/"+this.props.data.posts[k].date.slice(0,4)+
                            "/"+this.props.data.posts[k].date.slice(5,7)+
                            "/"+this.props.data.posts[k].date.slice(8,10)+
                            "/"+this.props.data.posts[k].slug+
                            "/"+this.props.data.posts[k].id

                            return url;
                        }
                    }
                }
                if(url===""){
                    this.needBack=false;
                    return "";
                }
            }
        }
        return url;
    }

    getThePost(){
        if(this.props.data.posts&&this.props.data.posts[0]){
            return DataStore.getPostsById(this.props.id);
        }
        else{
            return {
                date: "YYYY-MM-DD",
                title: {
                    rendered: "Loading Post"
                },
                content: {
                    rendered: "Retreiving Post..."
                }
            };
        }
    }


    render(){
        let post = DataStore.getPostById(this.props.id);
        this.needBack = true;
        this.needNext = true;
        let allPosts = this.props.data.posts?this.props.data.posts:"";
        let prevPostURL = "";
        let nextPostURL = "";

        for(var i = 0 ; i<allPosts.length; i++ ){
            if(this.props.id === allPosts[i].id){

                //Determine if we don't need the pagination button because we're already at first or last post.
                if(i===0){
                    this.needBack = false;
                }
                if(i===allPosts.length-1){
                    this.needNext=false;
                }

                //The next post IDs must be conditionals so that we don't go over the array bounds
                prevPostURL = this.getURL(this.needBack,-1,i);
                nextPostURL = this.getURL(this.needNext,1,i);
            }
        }

        let backButton = (
            <div className="back-btn-container">
                <LinkContainer
                    to={prevPostURL?prevPostURL:"/home"}>
                    <Button 
                        className="pagination-btn" 
                        bsSize="small"
                        >
                        &lt; Prev Post
                    </Button>
                </LinkContainer>
            </div>);
    
        let forwardButton = (
            <div className="forward-btn-container">
                <LinkContainer
                    to={nextPostURL?nextPostURL:"/home"}>
                    <Button
                        className="pagination-btn"
                        bsSize="small"
                        >
                        Next Post &gt;
                    </Button>
                </LinkContainer>
            </div>
        );
        
        let month = post.date?numToMonth(post.date.slice(5,7)):"";
        month = month.slice(0,1).toUpperCase()+month.slice(1,month.length);
        
        let year = post.date?post.date.slice(0,4):"";

        let day = post.date?post.date.slice(8,10):"";

        let date = month+" "+day+", "+year;
        let clockIcon = post.date?<i className="fa fa-clock-o" aria-hidden="true"></i>:"";

        return(
            <div>
                <Grid>
                    <div className="post-content-container">
                        <h1
                        dangerouslySetInnerHTML={{__html: post.title ? post.title.rendered : ""}}></h1>
                        <p>{clockIcon} {date}</p>
                        <a id="twitter-follow-btn" href="https://twitter.com/SaberBallBlog?ref_src=twsrc%5Etfw" style={{
                            position: "relative",
                            height: "20px",
                            boxSizing: "border-box",
                            padding: "2px 8px 2px 6px",
                            backgroundColor: "#1b95e0",
                            color: "#fff",
                            borderRadius: "3px",
                            fontWeight: "500",
                            cursor: "pointer",
                            textDecoration: "none"
                        }} data-show-count="false">Follow @SaberBallBlog</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        <div 
                            className="content-field"
                            dangerouslySetInnerHTML={{__html: post.content ? post.content.rendered :""}}></div>
                        <h4>Share this post:</h4>
                        <ShareButtons />
                        <div className="pagination-container">
                            <hr />
                            <Row>
                                <Col
                                    md={4}
                                    xs={6}
                                >
                                    {this.needBack? backButton: ""}
                                </Col>
                                <Col
                                    md={4}
                                    mdOffset={4}
                                    xs={6}
                                >
                                    {this.needNext? forwardButton: ""}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default connectToStores(Post);
