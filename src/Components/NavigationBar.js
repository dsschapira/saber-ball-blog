import React from 'react';
import {Navbar,
        Nav,
        NavItem,
        NavDropdown,
        MenuItem,
        FormGroup,
        FormControl,
        Button
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
                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search..." />
                    </FormGroup>
                    {' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
                <Nav pullRight>
                    <LinkContainer to="/about#">
                        <NavItem className="nav-btn" eventKey={1}>About</NavItem>
                    </LinkContainer>
                    <NavDropdown className="nav-btn" eventKey={3} title="Stats" id="basic-nav-dropdown">
                        <LinkContainer to="/Basic-Pitcher-Statistics#">
                            <MenuItem eventKey={3.1}>Basic Pitcher Statistics</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/Basic-Hitter-Statistics#">
                            <MenuItem eventKey={3.2}>Basic Hitter Statistics</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/Adavanced-Pitcher-Statistics#">
                            <MenuItem eventKey={3.3}>Advanced Pitcher Statistics</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/Advanced-Hitter-Statistics#">
                            <MenuItem eventKey={3.4}>Advanced Hitter Statistics</MenuItem>
                        </LinkContainer>    
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;