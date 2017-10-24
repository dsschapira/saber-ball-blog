import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {removeLink,limitLength} from '../functions.js';

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
                        <p dangerouslySetInnerHTML={{__html: limitLength(removeLink(props.excerpt),750)}}></p>
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