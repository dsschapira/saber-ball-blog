import React from 'react';
import {
    Nav,
    NavItem,
    Navbar
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Filter = (props) => {
    return(
        <div className="filter">
            <Navbar>
                <Nav>
                    <LinkContainer to="/home/most-recent">
                        <NavItem className="filter-item" eventKey={5}>Most Recent</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/home/player-analysis">
                        <NavItem className="filter-item" eventKey={6}>Player Analysis</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/home/prospects">
                        <NavItem className="filter-item" eventKey={7}>Prospects</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/home/roster-construction">
                        <NavItem className="filter-item" eventKey={8}>Roster Construction</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/home/trade-analysis">
                        <NavItem className="filter-item" eventKey={9}>Trade Analysis</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Filter;