import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataActions from '../flux/actions/DataActions.js';
import DataStore from '../flux/stores/DataStore.js';

export default class Post extends Component{

    state = {
        data: {}
    };

    static propTypes = {
        id: PropTypes.number.isRequired
    }

    componentDidMount(){
        this.getNewPost();
    }

    getNewPost(){
        DataActions.getPages(()=>{
            this.setState({
                data: DataStore.getPostById(this.props.id)
            });
        });
    }

    render(){
        return(
            <div className="content-container">
                <h1>{this.state.data.title ? this.state.data.title.rendered : ""}</h1>
                    <div 
                    className="content-field"
                    dangerouslySetInnerHTML={{__html: this.state.data.content ? this.state.data.content.rendered :""}}></div>
            </div>    
        );
    }
}
