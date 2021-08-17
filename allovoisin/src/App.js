import "./App.scss";
import React, { useState, useEffect } from "react";
import ArticlesList from "./Components/ArticlesList";
import AjoutForm from "./Components/AjoutForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // States
  const [articleName, setArticleName] = useState("");
  const [price, setPrice] = useState("");
  const [tva, setTva] = useState("");
  // const [activeButton, setActiveButton] = useState("disabled");
  const [article, setArticle] = useState([]);
  const [total, setTotal] = useState("");

  console.log(total);

  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row className="mt-3">
            <Col md={7} sm={6} xs={12} className="bgColor">
              <ArticlesList
                articleName={articleName}
                setArticleName={setArticleName}
                price={price}
                setPrice={setPrice}
                tva={tva}
                setTva={setTva}
                article={article}
                setArticle={setArticle}
                total={total}
                setTotal={setTotal}
              />
            </Col>
            <Col md={5} sm={6} xs={12} className="bgColor m-auto">
              <AjoutForm
                articleName={articleName}
                setArticleName={setArticleName}
                price={price}
                setPrice={setPrice}
                tva={tva}
                setTva={setTva}
                article={article}
                setArticle={setArticle}
                total={total}
                setTotal={setTotal}
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
