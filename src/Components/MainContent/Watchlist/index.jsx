import React from 'react';

import { ChevronRight, BookmarkPlusFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

import './style.css';

const WatchList = () => {
    return (
        <div className="watchlist-container">
            <div className="watchlist-top">
                <h3>What to watch</h3>
                <a href="#">Get more recommendations
                    <ChevronRight />                
                </a>
            </div>

            <a href="#" className="watchlist-redirect-btn">From you Watchlist
                <ChevronRight className="imdb-icon-size-md" />
            </a>

            {/* sign in page for user not logged in*/}
            <div className="watchlist-login-mod">
                <BookmarkPlusFill className="imdb-icon-size-md" />
                <h4>Sign in to access your Watchlist</h4>
                <p>Save shows and movies to keep track of what you want to watch</p>
                <Button variant="warning" className="signin-btn">Sign in to IMDb</Button>
            </div>

            {/* components for watch lists if user already sign in */}

        </div>
    );
}

export default WatchList;
