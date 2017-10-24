import React from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {removeLink} from '../functions.js';

const SearchResult = (props) => {

    return(
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
    );
};

SearchResult.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    urlExtension: PropTypes.string
};

export default SearchResult;