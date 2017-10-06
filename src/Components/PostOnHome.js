import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function removeLink(excerpt){ //remove here so it won't be visible when inspected
    let retStr = excerpt;
    let startIndex = excerpt.indexOf('<p class="link-more"');
    if(startIndex !== -1){
        let endIndex = excerpt.indexOf('</p>',startIndex)+4;
        retStr = excerpt.slice(0,startIndex)+excerpt.slice(endIndex+1,excerpt.length);
    }
    

    return retStr;
}

const PostOnHome = (props) => {
    return (
        <Col lg={4} md={6}>
            <LinkContainer to={'/posts/'+props.urlExtension+props.id}>
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
            </LinkContainer>
        </Col>
    );
};

PostOnHome.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    urlExtension: PropTypes.string
};

export default PostOnHome;