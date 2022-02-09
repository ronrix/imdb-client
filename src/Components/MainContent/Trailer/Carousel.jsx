import React from "react";

import { Carousel } from "react-bootstrap";

import { PlayCircle } from "react-bootstrap-icons";
import "./style.css";

const carouselLinks = [
    {
        url: "./images/spiderman.webp",
        wallpaper: "./images/spiderman-1.jpg",
        title: "spiderman no way home",
    },
    {
        url: "./images/spiderman-1.jpg",
        wallpaper: "./images/spiderman-1.jpg",
        title: "spiderman far from home",
    },
    {
        url: "./images/spidey.jpg",
        wallpaper: "./images/spiderman-1.jpg",
        title: "spidey man eh",
    },
];

const CarouselComponent = () => {
    return (
        <Carousel
            //fade
            variant="light"
            className="carousel-component"
            nextIcon={
                <span
                    aria-hidden="true"
                    className="carousel-control-next-icon"
                    style={{
                        border: "3px solid white",
                        height: "5rem",
                        width: "5rem",
                        padding: "2rem",
                        marginBottom: "2rem",
                        color: "white",
                    }}
                />
            }
            prevIcon={
                <span
                    aria-hidden="true"
                    className="carousel-control-prev-icon"
                    style={{
                        border: "3px solid white",
                        height: "5rem",
                        width: "5rem",
                        padding: "2rem",
                        marginBottom: "2rem",
                        color: "white",
                    }}
                />
            }
        >
            {carouselLinks.map((carousel, key) => {
                return (
                    <Carousel.Item
                        interval={1000}
                        className="carousel-content__item"
                        key={key}
                    >
                        <img
                            className="d-block w-100"
                            src={carousel.url}
                            alt="First slide"
                        />

                        <img
                            src={carousel.wallpaper}
                            className="carousel-movie-wallpaper"
                            alt="wallpaper"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <PlayCircle className="imdb-icon-size-lg" />
                            <div className="caption-texts">
                                <h3>{carousel.title}</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default CarouselComponent;
