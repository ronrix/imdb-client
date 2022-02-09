import React from 'react';

import {ChevronRight, BookmarkPlusFill, TicketFill} from 'react-bootstrap-icons';

import "./style.css";

const topFourLists = [
    {top: 1, title: 'Jackass Forever', revenue: '$23M'},
    {top: 2, title: 'Moonfall', revenue: '$9.9M'},
    {top: 3, title: 'Spider-man: No Way Home', revenue: '$9.5M'},
    {top: 4, title: 'Scream', revenue: '$4.8M'},
    {top: 5, title: 'Spider-man: No Way Home', revenue: '$9.5M'},
    {top: 6, title: 'Scream', revenue: '$4.8M'},
];

const lists = [];

// design the lists pattern
for(let i = 0; i < parseInt(topFourLists.length / 2); ++i) {
    // right 
    lists.push(topFourLists[i]);
    // left
    lists.push(topFourLists[parseInt(topFourLists.length/2) + i]);
}

const TopBoxOffice = () => {
    return (
        <div className="tbo-container">
            <a href="#">Top Box Office (USA)
                <ChevronRight className="imdb-icon-size-md right-arrow" />
            </a>
            <p>Weekend of February 4-6</p>

            <div className="tbo-lists">
                {lists.map((list, idx) => {
                    return (
                        <div key={idx} className={`tbo-top-list ${list?.top % 2 == 0 ? 'tbo-toplist-even-bg' : ''} `}>
                            <p className="tbo-top">{list?.top}</p>
                            <BookmarkPlusFill className="imdb-icon-size-md" />
                            <div className="top-list-container">
                                <div>
                                    <p>{list?.title}</p>
                                    <p className="top-list-rev">{list?.revenue}</p>
                                </div>
                                <TicketFill className="ticket-icon"/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TopBoxOffice;
