import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

function removeLink(excerpt){ //remove here so it won't be visible when inspected

    let startIndex = excerpt.indexOf('<p class="link-more"');
    let endIndex = excerpt.indexOf('</p>',startIndex)+4;

    let retStr = excerpt.slice(0,startIndex)+excerpt.slice(endIndex+1,excerpt.length);

    return retStr;
}

const PostOnHome = (props) => {
    return (
        <Col lg={4} md={6}>
            <div className="post-card">
                <div className="post-card-header">
                    <div className="post-card-content">
                        <h1 dangerouslySetInnerHTML={{__html: props.title}}></h1>
                    </div>
                </div>
                <div className="post-card-content">
                    <p dangerouslySetInnerHTML={{__html: removeLink(props.excerpt)}}></p>
                </div>
            </div>
        </Col>
    );
};

PostOnHome.propTypes = {
    //key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string
};

export default PostOnHome;