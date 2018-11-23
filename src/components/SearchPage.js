import React, { Component } from 'react';

import PhotoContainer from './PhotoContainer';

class SearchPage extends Component {

    render() {
        return (
            <div>
                <PhotoContainer 
                    query={this.props.match.params.query}
                    photoData={this.props.photoData} 
                    loading={this.props.loading} 
                    loadImages={this.props.loadImages}
                />
            </div>
        )
        
    }
}

export default SearchPage;