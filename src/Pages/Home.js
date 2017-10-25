import React from 'react';
import {Route,
    Redirect} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Banner from '../Components/Banner';
import '../styles/Home.css';
import {Button} from 'react-bootstrap';
import Filter from '../Components/Filter';
import PostsBox from '../Components/PostsBox';

const Home = ({match}) =>{
    if(match.path==="/home" && window.location.href.indexOf("/home/")===-1){
        window.scrollTo(0,0);
    }
    return(
        <div>
            <div className="banner-container">
                <Banner />
                <div className="text-center">
                    <LinkContainer to="/about">
                        <Button 
                            className="call-to-action-btn" 
                            bsSize="large">
                            Start Here!
                        </Button>
                    </LinkContainer>
                </div>
            </div>
            <Filter/>
            <div className="content-container-home">
                <Route exact path={match.path}
                    render = { () => <Redirect to={`${match.path}/most-recent`}/>} />
                <Route 
                    path={`${match.path}/most-recent`} 
                    render={ () => <PostsBox path="most-recent"/>}/>
                <Route 
                    path={`${match.path}/player-analysis`} 
                    render={ () => <PostsBox path="player-analysis"/>}/>
                <Route 
                    path={`${match.path}/prospects`} 
                    render={ () => <PostsBox path="prospects"/>}/>
                <Route 
                    path={`${match.path}/roster-construction`} 
                    render={ () => <PostsBox path="roster-construction"/>}/>
                <Route 
                    path={`${match.path}/trade-analysis`} 
                    render={ () => <PostsBox path="trade-analysis"/>}/>
            </div>
            <div className="buffer-space">
            </div>
        </div>
    );
}

export default Home;