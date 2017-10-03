import React, {Component} from 'react';
import Banner from '../Components/Banner';
import '../styles/Home.css';
import {Button} from 'react-bootstrap';
import Filter from '../Components/Filter';
import PostsBox from '../Components/PostsBox';
import PropTypes from 'prop-types';

export default class Home extends Component{

    static propTypes = {
        catPath: PropTypes.string.isRequired
    }

    componentDidMount(){
        this.setState({
            category: 'most-recent'
        });
    }

    render(){
        return(
            <div>
                <div className="banner-container">
                    <Banner />
                    <div className="text-center">
                        <Button 
                            className="subscribe-btn" 
                            bsSize="large">
                            Subscribe
                        </Button>
                    </div>
                </div>
                <Filter/>
                <div className="content-container-home">
                    <PostsBox path={this.props.catPath}/>
                </div>
                <div className="buffer-space">
                </div>
            </div>
        )
    }
}