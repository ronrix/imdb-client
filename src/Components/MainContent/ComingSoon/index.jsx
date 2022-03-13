import React from 'react'

import MultiCarousel from '../../MultipleCarousel/index.jsx';
import './style.css';

import { ChevronRight, BookmarkPlusFill } from 'react-bootstrap-icons';

const comingSoonData = [
  {img: "./images/spiderman.webp", caption: 'this is a caption', date: 'Apr 1'},
  {img: "./images/featured/two.png", caption: 'this is a caption', date: 'Apr 1'},
  {img: "./images/featured/one.png", caption: 'this is a caption', date: 'Apr 1' },
  {img: "./images/featured/two.png", caption: 'this is a caption', date: 'Apr 1' },
  {img: "./images/featured/one.png", caption: 'this is a caption',date: 'Apr 1' },
  {img: "./images/featured/two.png", caption: 'this is a caption', date: 'Apr 1'},
  {img: "./images/featured/one.png", caption: 'this is a caption', date: 'Apr 1'},
];

const ComingSoon = () => {
    return (
      <MultiCarousel 
        title="Coming Soon to Theaters (US)" 
        imgs={comingSoonData} 
        subtitle={'Trailers for upcoming releases'} 
        containerClassAdd={'widdy'} 
        iconComponent={<ChevronRight />}
        customClass={'customClass'}
        bookMarkPlusFill={<BookmarkPlusFill />}
        playIconClassPos={'playIconClassPos'}
      /> 
    )
}

export default ComingSoon;
