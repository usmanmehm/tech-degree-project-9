import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config.js'

class App extends Component {

  state = {
    photoUrls: [],
    loading: true
  }

  topics = [ "birds" , "mountains", "nature"];

  createPhotoContainer = (query) => {
    this.loadImages(query);
    return <PhotoContainer
      query={query}
      photoUrls={this.state.photoUrls} 
      loading={this.state.loading}
    />
  } 

  componentWillMount() {
    this.loadImages();
  }

  loadImages = (query = 'mountain') => {
    axios.get(`https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&per_page=24&tags=${query}`)
    .then(response => {
      let photoData = response.data.photos.photo;
      this.setState({ photoUrls: this.assembleUrl(photoData), loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  assembleUrl = (photosData) => {
    return photosData.map( photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` );
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" render={ ()=> <Header loadImages={this.loadImages} topics={this.topics}/>} />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer photoUrls={this.state.photoUrls} loading={this.state.loading}/>} />
            <Route path="/search/:query" render={ () => <PhotoContainer photoUrls={this.state.photoUrls} loading={this.state.loading}/>} />
            <Route path={"/" + this.topics[0]} render={ () => this.createPhotoContainer(this.topics[0])} />
            <Route path={"/" + this.topics[1]} render={ () => this.createPhotoContainer(this.topics[1])} />
            <Route path={"/" + this.topics[2]} render={ () => this.createPhotoContainer(this.topics[2])} />
          </Switch>
          
        </div>
      </Router>
      
    );
  }
}

export default App;
