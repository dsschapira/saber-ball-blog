import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class TweetBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "@SaberBallBlog ",
            charsLeft: 140-15
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value,
            charsLeft: 140-event.target.value.length
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
                    maxLength={140}
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