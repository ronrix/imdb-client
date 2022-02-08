import React from "react";

import CardComponent from "./Trailer/Card";
import CarouselComponent from "./Trailer/Carousel";
import Featured from "./Featured/index.jsx";

import { ChevronRight } from "react-bootstrap-icons";

import "./style.css";

const MainContent = () => {
    return (
        <div className="main-container">
            {/* Trailer */}
            <div className="trailer-container">
                <CarouselComponent />
                <div className="card-container">
                    <h2 className="main-content_upnext">Up Next</h2>
                    <CardComponent />
                    <p className="browse-trailer-btn">
                        Browse Trailers
                        <ChevronRight />
                    </p>
                </div>
            </div>

            {/* Featured Today */}
            <Featured />
        </div>
    );
};

export default MainContent;
