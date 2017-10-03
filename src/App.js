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
            <Route exact path="/" render={() => <Redirect to="/home/most-recent" />}/>
            <Route path="/home" component={Home}/>
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
