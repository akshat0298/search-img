import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='Photo'
      src={`https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}_w.jpg`}
      className="thumbnail-photo"
    />
  </div>
);
