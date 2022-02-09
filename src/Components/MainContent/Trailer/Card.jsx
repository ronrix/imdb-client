import React from "react";

import { Card } from "react-bootstrap";
import { PlayCircle } from "react-bootstrap-icons";

import "./style.css";

const sampleTrailerTimeframe = "2:11";

const cardLinks = [
    { url: "./images/spiderman-1.jpg", title: "spiderman no way home" },
    { url: "./images/spiderman-1.jpg", title: "spiderman far from home" },
    { url: "./images/spiderman-1.jpg", title: "spiderman far from home" },
];

const CardComponent = () => {
    return (
        <Card className="card-component">
            {cardLinks.map((card, idx) => {
                return (
                    <Card.Body className="card-inner" key={idx}>
                        <Card.Img
                            variant="top"
                            src={card.url}
                            className="card-inner__img"
                        />
                        <div className="card-inner__content">
                            <div className="imdb-flex">
                                <PlayCircle className="imdb-icon-size-md" />
                                <p style={{ marginLeft: ".5rem" }}>
                                    {sampleTrailerTimeframe}
                                </p>
                            </div>
                            <Card.Title className="card-title">
                                {card.title}
                            </Card.Title>
                            <Card.Text className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </div>
                    </Card.Body>
                );
            })}
        </Card>
    );
};

export default CardComponent;
