import "./App.scss";
import React, { useState } from "react";
import ArticlesList from "./Components/ArticlesList";
import Edit from "./Components/Edit";
import AjoutForm from "./Components/AjoutForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // States
  const [articleName, setArticleName] = useState("");
  const [price, setPrice] = useState("");
  const [tva, setTva] = useState("");
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [total, setTotal] = useState("");
  const [edit, setEdit] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Container className="m-auto">
          <Row className="mt-3">
            <Col md={7} sm={6} xs={12}>
              <ArticlesList
                setArticleName={setArticleName}
                setPrice={setPrice}
                setTva={setTva}
                articles={articles}
                setEdit={setEdit}
                setArticle={setArticle}
              />
            </Col>
            <Col md={5} sm={6} xs={12} className="bgColor m-auto">
              {edit ? <Edit 
              articleName={articleName}
              setArticleName={setArticleName}
              price={price}
              setPrice={setPrice}
              tva={tva}
              setTva={setTva}
              articles={articles}
              setArticles={setArticles}
              total={total}
              setTotal={setTotal}
              setEdit={setEdit}
              article={article}
              /> : 
              <AjoutForm
              className="bgColor"
              articleName={articleName}
              setArticleName={setArticleName}
              price={price}
              setPrice={setPrice}
              tva={tva}
              setTva={setTva}
              articles={articles}
              setArticles={setArticles}
              total={total}
              setTotal={setTotal}
            />}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
