import React from 'react';
import PropTypes from 'prop-types';
import {Col, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {removeLink,limitLength} from '../functions.js';

const PostOnHome = (props) => {
    
    if(props.media==="0"||props.media===undefined){
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
    }
    else{
        return(
            <Col lg={4} md={6}>
                <LinkContainer to={'/posts/'+props.urlExtension+props.id}>
                    <div className="post-card">
                        <div className="post-card-header">
                            <div className="post-card-content">
                                <h1 dangerouslySetInnerHTML={{__html: props.title}}></h1>
                            </div>
                        </div>
                        <Image className="card-img-top card-img" src={props.media} />
                        <div className="post-card-content">
                            <p dangerouslySetInnerHTML={{__html: limitLength(removeLink(props.excerpt),850)}}></p>
                        </div>
                    </div>
                </LinkContainer>
            </Col>
        );
    }
};

PostOnHome.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    urlExtension: PropTypes.string,
    media: PropTypes.string
};

export default PostOnHome;