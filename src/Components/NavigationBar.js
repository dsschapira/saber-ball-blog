import React from 'react';
import {Navbar,
        Nav,
        NavItem,
        FormGroup,
        FormControl
        } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import '../styles/NavigationBar.css';


const NavigationBar = (props) => {
    return (
        <Navbar fixedTop inverse collapseOnSelect>
            <Navbar.Header className="nav-btn">
                <Navbar.Brand className="pl-1">
                    <NavLink to="/home">SaberBallBlog</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search..." />
                    </FormGroup>
                    {' '}
                </Navbar.Form>
                <Nav pullRight>
                    <LinkContainer to="/about#">
                        <NavItem className="nav-btn" eventKey={1}>About</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Basic-Pitcher-Statistics#">
                        <NavItem className="nav-btn" eventKey={3}>Basic Pitcher Statistics</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Basic-Hitter-Statistics#">
                        <NavItem className="nav-btn" eventKey={4}>Basic Hitter Statistics</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Adavanced-Pitcher-Statistics#">
                        <NavItem className="nav-btn" eventKey={5}>Advanced Pitcher Statistics</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Advanced-Hitter-Statistics#">
                        <NavItem className="nav-btn" eventKey={6}>Advanced Hitter Statistics</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;