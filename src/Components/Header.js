import React from 'react';
//import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import '../styles/Header.css';

const Header = (props) => {

    return (
        <NavigationBar />
    );
  }
  
  Header.propTypes = {
      //screenSize: PropTypes.number
  };

export default Header;