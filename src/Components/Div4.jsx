import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'
const Div4 = ({ imageData }) => {
  return (
    <div id='4' className="background-3">
    <div className="text-6">Check what your house can do for you</div>
    <div className="image-3 no-space-between-inline-blocks">
    <div className="image-container">
            {imageData.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="responsive-image"
                />
            ))}
        </div>
    </div>
  </div>

  );
};

export default Div4;
