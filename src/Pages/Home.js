import React, {Component} from 'react';
import Banner from '../Components/Banner';
import '../styles/Home.css';
import {Button} from 'react-bootstrap';
import Filter from '../Components/Filter';
//import PropTypes from 'prop-types';

export default class Home extends Component{

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

                </div>
                <div className="buffer-space">
                </div>
            </div>
        )
    }
}