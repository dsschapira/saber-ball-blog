import React, { Component } from 'react';
import {BrowserRouter,
        Route,
        Switch,
        Redirect} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Page from './Pages/Page';
import PostPage from './Pages/PostPage';
import DataActions from './flux/actions/DataActions';
import DataStore from './flux/stores/DataStore';
import './styles/App.css';


class App extends Component {

  componentDidMount(){
    DataActions.getPages(()=>{
      this.setState({
          data: DataStore.getAll()
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" render={ () => <Page slug="about" />}/>
            <Route path="/posts/:year/:month/:day/:slug/:id" component={PostPage}/>
            <Route path="/Basic-Pitcher-Statistics" render={ () => <Page slug="basic-pitcher-statistics" /> }/>
            <Route path="/Basic-Hitter-Statistics" render={ () => <Page slug="basic-hitter-statistics" /> }/>
            <Route path="/Adavanced-Pitcher-Statistics" render={ () => <Page slug="advanced-pitcher-statistics" /> }/>
            <Route path="/Advanced-Hitter-Statistics" render={ () => <Page slug="advanced-hitter-statistics" /> }/>
            <Route render={() => <Redirect to="/home" /> } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
