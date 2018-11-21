import React from 'react';
import { Route, NavLink } from 'react-router-dom'

import SearchForm from './SearchForm';

const Header = (props) => {

    function capitalize (word) {
        let firstLetter = word[0].toUpperCase();
        let rest = word.slice(1);
        return firstLetter + rest;
    }

    let topics = props.topics.map( topic => {
        return <li><NavLink to={"/" + topic}>{capitalize(topic)}</NavLink></li>
    })

    return (
        <div>
            <SearchForm 
                loadImages = {props.loadImages}
            />
            <nav className="main-nav">
                <ul>
                    {topics}
                </ul>
            </nav>
        </div>

    );
};

export default Header;

