import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class TweetBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "@SaberBallBlog "+window.location.href,
            charsLeft: 140-15-23
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.twitter = require('twitter-text'); //use twitter's length checker
    }

    handleChange(event){
        this.setState({
            value: event.target.value,
            charsLeft: 140-this.twitter.getTweetLength(event.target.value)
            });
    }

    handleSubmit(event){
        event.preventDefault();
        window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(this.state.value));
    }
    
    render(){
        return(
            <form>
                <textarea 
                    id="tweet-box"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <br />
                <Button bsStyle="primary" bsSize="small" onClick={this.handleSubmit}>Tweet @SaberBallBlog!</Button>
                <span style={{marginLeft:".5em"}}>{this.state.charsLeft}</span>
            </form>
        );
    }
}

export default TweetBox;