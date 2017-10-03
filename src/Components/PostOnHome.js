import React from 'react';
import PropTypes from 'prop-types';

const PostOnHome = (props) => {
    return (
        <div className="post-card">
            <div className="post-card-header">
                <div className="post-card-content">
                    <h1 dangerouslySetInnerHTML={{__html: props.title}}></h1>
                </div>
            </div>
            <div className="post-card-content">
                <p dangerouslySetInnerHTML={{__html: props.excerpt}}></p>
            </div>
        </div>
    );
};

PostOnHome.propTypes = {
    //key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string
};

export default PostOnHome;