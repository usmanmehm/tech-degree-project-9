import React from 'react';

import SearchForm from './SearchForm';

const Header = () => {
    return (
        <div>
            <SearchForm />
            <nav class="main-nav">
                <ul>
                    <li><a href='#'>Cats</a></li>
                    <li><a href='#'>Dogs</a></li>
                    <li><a href='#'>Computers</a></li>
                </ul>
            </nav>
        </div>

    );
};

export default Header;

