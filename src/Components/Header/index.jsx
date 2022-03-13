import React, { useState } from "react";
import "./style.css";

import { Container, Row } from "react-bootstrap";

import Title from "./Title";
import SearchBar from "./SearchBar";
import Buttons from "./Buttons";

const Header = () => {
    const [searchCategory, setSearchCategory] = useState("All");
    const [searchInput, setSearchInput] = useState("");

    const selectCategory = (eventKey, event) => {
        setSearchCategory(event.target.innerText);
    };

    return (
        <div className="navbar-wrapper">
            <Container className="navbar">
                <Row className="checks">
                    <Title />
                    <SearchBar
                        selectCategory={selectCategory}
                        searchCategory={searchCategory}
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                    />
                    <Buttons />
                </Row>
            </Container>
        </div>
    );
};

export default Header;
