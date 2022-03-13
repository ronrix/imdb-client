import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header/";
import MainContent from "./Components/MainContent/";

import Container from 'react-bootstrap/Container';

const App = () => {
    return (
        <Container fluid="md">
            <Header />
            <MainContent />
        </Container>
    );
};

export default App;
