import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound';
import Loading from './Loading';

class PhotoContainer extends Component {

    // When the Component is first loaded, we want to check for a query; if no query, then the default page is shown
    constructor(props) {
        super(props);
        props.query ? props.loadImages(props.query) : props.loadImages();
    }

    //this function is to put together the flickr photo URL using the data retrieved from the API
    assembleUrl = (photo) => {
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    } 

    //this function creates a Photo component for every photo present within the photoData
    renderImages () {
        let photo;
        //this conditional makes sure that the following codes executes only when the data is retrieved
        if (!this.props.loading) {
            photo = this.props.photoData.length > 0 ?
                this.props.photoData.map( (photo) => <Photo photoUrl={this.assembleUrl(photo)} key={photo.id}/>) : <NotFound />;
        };
        return photo;
    }
    
    render() {
        return (
            <div className="photo-container">
                <h2>{ this.props.query ? `Results for ${this.props.query}` : ""}</h2>
                <ul>
                {/* When the loading state is true, the loading Component is rendered; when done, the photos are displayed */}
                    { this.props.loading ? <Loading /> : this.renderImages() } 
                </ul>
            </div>
        )
    }

   
}

export default PhotoContainer;