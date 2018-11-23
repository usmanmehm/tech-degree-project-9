import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import SearchForm from './SearchForm';

class Header extends Component {

    // on click event that loads the images associated with the button
    loadImages = (query) => {
        this.props.loadImages(query);
    } 
    
    // returning a JSX element that corresponds to the number of topic pages
    topics = this.props.topics.map( (topic, index) => {
        return <li key={index} onClick={() => this.loadImages(topic)}>
                    <NavLink to={"/" + topic}>{topic}</NavLink>
                </li>
    })

    render() {
        return (
            <div>
                <nav className="main-nav">
                    <h1>React Gallery App</h1>
                    <h3>Using Flickr API</h3>
                    <ul>
                        <li onClick={() => this.loadImages()}>
                            <NavLink exact to={"/"}>Home</NavLink>
                        </li>
                        {this.topics}
                    </ul>
                </nav>
                {/* The search form has to be able to search and also access certain routeProps */}
                <SearchForm 
                    searchImages = {this.props.loadImages}
                    history={this.props.history}
                />
                
            </div>
    
        );
    }
};

export default Header;

