import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {
    let photos = props.photoUrls;
    let photo;
    if (!props.loading) {
        photo = photos.length > 0 ? 
            photos.map( (photo, index) => <Photo photoUrl={photo} key={index}/>) : <NotFound />;
    };


    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photo}
            </ul>
        </div>
    )
}

export default PhotoContainer;