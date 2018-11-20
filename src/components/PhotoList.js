import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = (props) => {

    // const data = props.data;

    // let result = images.length > 0 ? 
    //     images.map ( image => <Photo image={image} />) : <NotFound />



    return (
        <div class="photo-container">
            <h2>Results</h2>
            <Photo />
            <NotFound />
        </div>
    )
}

export default PhotoList;