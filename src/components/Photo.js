import React from 'react';

const Photo = (props) => {

    return (
        <li>
            <a href={props.photoUrl} target="_blank">
                <img src={props.photoUrl} alt="" />
            </a>
        </li>
    );
}

export default Photo;