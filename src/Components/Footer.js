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
                  <li><a href="/archive/august/2016" className="archive-link">August 2016</a></li>
                  <li><a href="/archive/july/2016" className="archive-link">July 2016</a></li>
                  <li><a href="/archive/june/2016" className="archive-link">June 2016</a></li>
                  <li><a href="/archive/may/2016" className="archive-link">May 2016</a></li>
                  <li><a href="/archive/april/2016" className="archive-link">April 2016</a></li>
                  <li><a href="/archive" className="archive-link">More...</a></li>
                </ul>
              </Col>
              <Col md={3} mdOffset={7}>
                <h5>Follow SaberBallBlog on Social Media!</h5>
                <Row>
                  <SocialIcon className="custom-social-icons" network={"twitter"} url="https://twitter.com/saberballblog"/>
                  <SocialIcon className="custom-social-icons" network={"facebook"} url="https://www.facebook.com/Saber-Ball-Blog-509258412805970/?ref=br_rs"/>
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