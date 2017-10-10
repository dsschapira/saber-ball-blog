import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import DataActions from '../flux/actions/DataActions.js';

class NavForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchString: ''
      };
  
      this.submitHandler = this.submitHandler.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }

    static propTypes={
        placeholder: PropTypes.string
    };
  
    handleInput(event) {
      const target = event.target;
      this.setState({
        [target.name]: target.value
      });
    }  
  
    submitHandler(event) {
      event.preventDefault();
      window.scrollTo(0,0);
    
      this.props.history.push('/search/'+encodeURI(this.state.searchString));

      DataActions.getPages(() => {
        return true;
      },this.state.searchString);

      this.setState({searchString:''});
    }
  
    render() {
      return (
        <form id="search-bar-form" onSubmit={this.submitHandler}>
          <input
            id="search-bar"
            type='text'
            name='searchString'
            placeholder={this.props.placeholder?this.props.placeholder:''}
            value={this.state.searchString}
            onChange={this.handleInput} />
        </form>
      )
    }
  }
  
  export default withRouter(NavForm)