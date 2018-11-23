import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteProps } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';
import SearchPage from './components/SearchPage';
import PageNotFound from './components/PageNotFound';
import apiKey from './config.js'

class App extends Component {

  state = {
    photoData: [],
    loading: true
  }

  topics = [ "birds" , "mountains", "nature"]; //these are the different pages that we want
  
  //this function retrieves data from flickr API and sets the data to the photoData state
  loadImages = (query = "clouds") => {
    this.setState({ loading: true, photoData: [] })
    axios.get(`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&per_page=24&tags=${query}`)
    .then(response => {
      return response.data.photos.photo;
    })
    .then( data => {
      this.setState({ photoData: data, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });

    return true;
  }

  // this function will return PhotoContainers to be used with the routes --> every photo container corresponds to a topic above
  createPhotoContainer = (query, routeProps) => {
    return <PhotoContainer
      {...routeProps}
      query={query}
      photoData={this.state.photoData} 
      loading={this.state.loading}
      loadImages={this.loadImages}
    />
  } 

  createSearch = (routeProps) => {
    return <SearchPage 
      {...routeProps}
      photoData={this.state.photoData} 
      loading={this.state.loading}
      loadImages={this.loadImages}
    />
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" render={ (routeProps)=> <Header {...routeProps} loadImages={this.loadImages} topics={this.topics}/>} />
          <Switch>
            <Route exact path="/" render={ (routeProps) => this.createPhotoContainer("", routeProps) } />
            <Route exact path="/search/:query" render={ (routeProps) => this.createSearch(routeProps) }/>
            <Route path={"/" + this.topics[0]} render={ (routeProps) => this.createPhotoContainer(this.topics[0], routeProps) } />
            <Route path={"/" + this.topics[1]} render={ (routeProps) => this.createPhotoContainer(this.topics[1], routeProps) } />
            <Route path={"/" + this.topics[2]} render={ (routeProps) => this.createPhotoContainer(this.topics[2], routeProps) } />
            <Route component={PageNotFound} />
          </Switch>
          
        </div>
      </Router>
      
    );
  }
}

export default App;
