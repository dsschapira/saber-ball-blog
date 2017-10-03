import React from 'react';
//import PropTypes from 'prop-types';
import '../styles/Footer.css';
import { 
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';

const Footer = (props) => {
    return (
      <div className="footer-container">
        <div className="footer">
          <Grid>
            <Row>
              <Col md={2}>
                <h5>Archive</h5>
                <ul className="archive">
                  <li><a className="archive-link">August 2016</a></li>
                  <li><a className="archive-link">July 2016</a></li>
                  <li><a className="archive-link">June 2016</a></li>
                  <li><a className="archive-link">May 2016</a></li>
                  <li><a className="archive-link">April 2016</a></li>
                  <li><a className="archive-link">March 2016</a></li>
                </ul>
              </Col>
              <Col md={3} mdOffset={7}>
                <h5>Follow SaberBallBlog on Social Media!</h5>
                <Row>
                  <SocialIcon className="custom-social-icons" url="https://twitter.com/saberballblog"/>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
  
  Footer.propTypes = {};

export default Footer;