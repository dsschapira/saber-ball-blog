import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import {LinkContainer} from 'react-router-bootstrap';

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


    render(){
        let post = DataStore.getPostById(this.props.id);
        this.needBack = true;
        this.needNext = true;
        let allPosts = this.props.data.posts;
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
                        bsSize="large"
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
                        bsSize="large"
                        >
                        Next Post &gt;
                    </Button>
                </LinkContainer>
            </div>
        );

        return(
            <Grid>
                <div className="content-container">
                    <h1>{post.title ? post.title.rendered : ""}</h1>
                        
                    <div 
                        className="content-field"
                        dangerouslySetInnerHTML={{__html: post.content ? post.content.rendered :""}}></div>
                
                    <div className="pagination-container">
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
        );
    }
}

export default connectToStores(Post);
