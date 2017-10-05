import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataStore from '../flux/stores/DataStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';

class Post extends Component{

    static propTypes = {
        id: PropTypes.number.isRequired
    }

    static getStores(){
        return [DataStore];
    }

    static getPropsFromStores(){
        return DataStore.getState();
    }

    render(){
        let post = DataStore.getPostById(this.props.id);

        return(
            <div className="content-container">
                <h1>{post.title ? post.title.rendered : ""}</h1>
                    <div 
                    className="content-field"
                    dangerouslySetInnerHTML={{__html: post.content ? post.content.rendered :""}}></div>
            </div>    
        );
    }
}

export default connectToStores(Post);
