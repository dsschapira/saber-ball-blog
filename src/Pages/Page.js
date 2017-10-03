import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataActions from '../flux/actions/DataActions.js';
import DataStore from '../flux/stores/DataStore.js';
import Banner from '../Components/Banner';
import '../styles/Page.css';

export default class Page extends Component{

    state = {
        data: {}
    };

    static propTypes = {
        slug: PropTypes.string.isRequired
    }

    componentDidMount(){
        this.getNewPage();
    }

    getNewPage(){
        DataActions.getPages(()=>{
            this.setState({
                data: DataStore.getPageBySlug(this.props.slug)
            });
        });
    }

    render(){
        if(this.props.slug !== this.state.data.slug){
            this.getNewPage();
        }
        
        return(
            <div>
                <div className="banner-container-page">
                    <Banner />
                </div>
                <div className="content-container">
                    <h1>{this.state.data.title ? this.state.data.title.rendered : ""}</h1>
                    <div 
                    className="content-field"
                    dangerouslySetInnerHTML={{__html: this.state.data.content ? this.state.data.content.rendered :""}}></div>
                </div>
            </div>
        );
    }
}