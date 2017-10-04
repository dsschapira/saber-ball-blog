import React from 'react';
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
                id = {parseInt(match.params.id,10)}
            />
        </div>
    );
}

export default PostPage;