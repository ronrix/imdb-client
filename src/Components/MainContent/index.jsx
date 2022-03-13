import React from "react";

import CardComponent from "./Trailer/Card";
import CarouselComponent from "./Trailer/Carousel";

import Featured from "./Featured/index.jsx";
import WatchList from "./Watchlist/index.jsx";
import TopBoxOffice from "./TopBoxOffice/index.jsx";
import ComingSoon from "./ComingSoon/index.jsx";

import { ChevronRight } from "react-bootstrap-icons";

import "./style.css";

const MainContent = () => {
    return (
        <div className="main-content__container">
            {/* Trailer */}
            <div className="main-content__trailer">
                <CarouselComponent />
                <div className="main-container__card">
                    <h2 className="btn-upnext">Up Next</h2>
                    <CardComponent />
                    <p className="trailer-btn">
                        Browse Trailers
                        <ChevronRight />
                    </p>
                </div>
            </div>

            {/* Featured Today */}
            <Featured />

            {/* WatchList front page*/}
            <WatchList />

            {/* Top Box office Lists */}
            <TopBoxOffice />

            {/* Coming Soon to Theaters */}
            <ComingSoon />
        </div>
    );
};

export default MainContent;
