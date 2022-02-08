import React from "react";

import { Col, Button } from "react-bootstrap";
import { BookmarkPlusFill } from "react-bootstrap-icons";

const Buttons = () => {
    return (
        <Col xs={2}>
            <Button className="watchlist">
                <BookmarkPlusFill className="watchlist--icon" />
                Watchlist
            </Button>
            <Button className="signin">Sign In</Button>
        </Col>
    );
};

export default Buttons;
