import React from 'react';
import PropTypes from 'prop-types';

const PostOnHome = (props) => {
    return (
        <div className="post-card">
            <h1 dangerouslySetInnerHTML={{__html: props.title}}></h1>
            <hr />
            <p dangerouslySetInnerHTML={{__html: props.excerpt}}></p>
        </div>
    );
};

PostOnHome.propTypes = {
    //key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string
};

export default PostOnHome;