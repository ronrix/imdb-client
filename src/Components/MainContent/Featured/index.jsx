import React from "react";
import Carousel from "react-multi-carousel";
import { PlayCircle } from "react-bootstrap-icons";

import 'react-multi-carousel/lib/styles.css';
import "./style.css";

const featuredLinks = [
    "./images/spiderman.webp",
    "./images/featured/two.png",
    "./images/featured/one.png",
    "./images/featured/two.png",
    "./images/featured/one.png",
    "./images/featured/two.png",
    "./images/featured/one.png",
];

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

const Featured = () => {
    return (
        <div className="featured-container">
            <h3>Featured today</h3>
            <Carousel 
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                //ssr={true} // means to render carousel on server-side.
                infinite={false}
                //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                //autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={10}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="item-padding" 
                sliderClass="react-multi-carousel-track"
              >
                {featuredLinks.map((featured, idx) => {
                    return (
                        <div key={idx} className="featured-card-img-container">
                            <img src={featured} alt="featured movies" className="featured-img" />
                            <PlayCircle className="imdb-icon-size-sm featured-icon-position"/>
                            <div className="feature-text">This is sample text </div>
                        </div>
                    )
                })
                }
            </Carousel>
        </div>
    );
};

export default Featured;
