import React, { useState, useCallback } from 'react';
import './Gallery.scss';
import GalleryData from './GalleryData'

import { ReactPhotoCollage } from "react-photo-collage";


const Gallery = () => {

    const setting = {
        width: "100%",
        height: ["350px", "370px"],
        layout: [4, 3, 5, 3, 2, 4, 3, 2],
        photos: GalleryData,
        showNumOfRemainingPhotos: true
      };
      


    return (
        <>
             <ReactPhotoCollage {...setting} />
        </>
    )
}

export default Gallery
