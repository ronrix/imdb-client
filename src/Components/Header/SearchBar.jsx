import React from "react";

import { Col, Dropdown, Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchBar = ({
    selectCategory,
    searchCategory,
    setSearchInput,
    searchInput,
}) => {
    return (
        <Col xs={9} className="search--container">
            <div className="container--search">
                <Dropdown
                    onSelect={selectCategory}
                    className="dropdown--button"
                >
                    <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                    >
                        {searchCategory}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Divider />
                        <Dropdown.Item active>All</Dropdown.Item>
                        <Dropdown.Item>Title</Dropdown.Item>
                        <Dropdown.Item>Celebs</Dropdown.Item>
                        <Dropdown.Divider />
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group
                    className="mb-3 search--input"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        type="email"
                        placeholder="Search IMDb"
                        size="sm"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    {searchInput ? (
                        <Button variant="primary" type="submit">
                            <Search />
                        </Button>
                    ) : (
                        <Button variant="primary" type="submit" disabled>
                            <Search></Search>
                        </Button>
                    )}
                </Form.Group>
            </div>
        </Col>
    );
};

export default SearchBar;
