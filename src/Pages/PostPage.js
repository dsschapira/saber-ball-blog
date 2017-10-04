import React, {Component} from 'react';
import {Route,
    Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Banner from '../Components/Banner';
import Post from '../Components/Post';
import '../styles/Page.css';

const PostPage = ({match}) =>{
    window.scrollTo(0,0);
    return(
        <div>
            <div className="banner-container-page">
                <Banner />
            </div>
            <Post 
                id = {parseInt(match.params.id)}
            />
        </div>
    );
}

export default PostPage;