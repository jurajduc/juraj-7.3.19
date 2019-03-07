import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ListView from './components/ListView';
import DetailView from './components/DetailView';
import CreateView from './components/CreateView';
import Loading from './components/Loading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="nav">
            <Link to="/documents" className="link">Documents</Link> 
            <Link to="/document/create" className="link">Create</Link> 
          </div>
        </header>
        <content>
            <div className="app-content">
              <Switch>
                <Route  path="/document/create" render={props => <CreateView /> }/>
                <Route  path="/document/:documentId" render={props => <DetailView /> }/>
                <Route  path="/documents" render={props => <ListView /> }/>
                <Redirect to="/documents" />  
            </Switch>
          </div>
        </content>
      </div>
    );
  }
}

export default App;
