import "./App.scss";
import React, { useState, useEffect } from "react";
import Articles from "./Components/Articles";
import Ajout from "./Components/Ajout";
import Edit from "./Components/Edit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // States
  const [articleName, setArticleName] = useState("");
  const [price, setPrice] = useState("");
  const [tva, setTva] = useState("");
  const [activeButton, setActiveButton] = useState("disabled");
  const [article, setArticle] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row className="mt-3">
            <Col md={7} sm={6} xs={12} className="bgColor">
              <Articles
              articleName={articleName}
              price={price} 
              tva={tva} />
            </Col>
            <Col md={5} sm={6} xs={12} className="bgColor m-auto">
              <Ajout
                articleName={articleName}
                price={price} 
                tva={tva}
                />
            </Col>
          </Row>
        </Container>
        <Edit />
      </header>
    </div>
  );
}

export default App;
