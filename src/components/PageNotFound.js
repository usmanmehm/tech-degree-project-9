import React from 'react';

const PageNotFound = () => {
    return (
        <div className="does-not-exist">
            <h2>404: Page Not Found</h2>
            <h3>Woops, it looks like the page you requested does not exist.</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Question_mark_alternate.svg"></img>
        </div>
    )
}

export default PageNotFound;