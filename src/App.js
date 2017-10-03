import React, { Component } from 'react';
import {BrowserRouter,
        Route,
        Switch,
        Redirect} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Page from './Pages/Page';
import './styles/App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />}/>
            <Route exact path="/home" render={ () => <Home catPath="most-recent"/>}/>
            <Route path="/home/most-recent" render={ () => <Home catPath="most-recent"/>}/>
            <Route path="/home/player-analysis" render={ () => <Home catPath="player-analysis"/>}/>
            <Route path="/home/prospects" render={ () => <Home catPath="prospects"/>}/>
            <Route path="/home/roster-construction" render={ () => <Home catPath="roster-construction"/>}/>
            <Route path="/home/trade-analysis" render={ () => <Home catPath="trade-analysis"/>}/>
            <Route path="/about" render={ () => <Page slug="about" />}/>
            <Route path="/Basic-Pitcher-Statistics" render={ () => <Page slug="basic-pitcher-statistics" /> }/>
            <Route path="/Basic-Hitter-Statistics" render={ () => <Page slug="basic-hitter-statistics" /> }/>
            <Route path="/Adavanced-Pitcher-Statistics" render={ () => <Page slug="advanced-pitcher-statistics" /> }/>
            <Route path="/Advanced-Hitter-Statistics" render={ () => <Page slug="advanced-hitter-statistics" /> }/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
