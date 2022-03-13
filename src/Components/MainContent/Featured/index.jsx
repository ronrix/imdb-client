import React from "react";

import MultiCarousel from '../../MultipleCarousel/index.jsx';
import "./style.css";


const featuredLinks = [
  {img: "./images/spiderman.webp", caption: 'this is a caption'},
  {img: "./images/featured/two.png", caption: 'this is a caption'},
  {img: "./images/featured/one.png", caption: 'this is a caption'},
  {img: "./images/featured/two.png", caption: 'this is a caption'},
  {img: "./images/featured/one.png", caption: 'this is a caption'},
  {img: "./images/featured/two.png", caption: 'this is a caption'},
  {img: "./images/featured/one.png", caption: 'this is a caption'}
];

const Featured = () => {
    return (
      <MultiCarousel imgs={featuredLinks} title={"Featured Today"} />
    );
};


export default Featured;
