import React from "react";
import Carousel from "react-multi-carousel";
import { PlayCircle, ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";

import 'react-multi-carousel/lib/styles.css';
import "./style.css";


const CustomLeftArrow = ({ onClick }) => {
  return (
    <div onClick={() => onClick()} className="custom-left-arrow">
      <ChevronCompactLeft  />
    </div>
  )
}

const CustomRightArrow = ({ onClick }) => {
  return (
    <div onClick={() => onClick()} className="custom-right-arrow">
      <ChevronCompactRight  />
    </div>
  )
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MultiCarousel = ({ imgs, title, ...rest }) => {

  const {subtitle, containerClassAdd, iconComponent, customClass, bookMarkPlusFill, playIconClassPos} = rest;

    return (
        <div className={`multi-carou-container`}>
            <h3 className={`${customClass}`}>{title} {iconComponent}</h3>
            <h5>{subtitle}</h5>
            <Carousel 
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={false}
                keyBoardControl={true}
                customTransition="all .5s ease-in-out"
                transitionDuration={500}
                containerClass={`carousel-container ${containerClassAdd}`}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="item-padding" 
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                  {imgs.map((multi, idx) => {
                      return (
                          <div key={idx} className="multi-carou-item">
                              <img src={multi.img} alt="movies" className="multi-carou-img" />
                              <PlayCircle className={`imdb-icon-size-sm multi-carou-icon-position ${playIconClassPos}`} />
                              <div className="multi-carou-text">
                                {multi?.date ?(
                                  <div className="coming-soon">
                                      {bookMarkPlusFill} 
                                      <div className="coming-soon-caption">
                                        <p>{multi.date}</p>
                                        <a href="#">{multi.caption}</a>
                                      </div>
                                </div>)
                                : <p>{multi.caption}</p>
                                }
                              </div>
                          </div>
                      )
                  })
                  }
          </Carousel> 
        </div>
    );
};


export default MultiCarousel;
