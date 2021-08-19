import "./App.scss";
import React, { useState, useEffect } from "react";
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
  const [showAddArticle, setShowAddArticle] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // Hook

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  useEffect(() => {
    if (windowSize.width <= 575) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  }, [windowSize]);
  console.log(responsive);

  const mobileView = (
    <Row className="mt-3">
      <Col md={7} sm={6} xs={12}>
        {!edit && !showAddArticle && (
          <ArticlesList
            setArticleName={setArticleName}
            setPrice={setPrice}
            setTva={setTva}
            articles={articles}
            setEdit={setEdit}
            setArticle={setArticle}
            responsive={responsive}
            showAddArticle={showAddArticle}
            setShowAddArticle={setShowAddArticle}
          />
        )}
        {edit && (
          <Edit
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
            responsive={responsive}
          />
        )}
        {showAddArticle && (
          <AjoutForm
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
            responsive={responsive}
          />
        )}
      </Col>
    </Row>
  );

  const defaultView = (
    <Row className="mt-3">
      <Col md={7} sm={6} xs={12}>
        <ArticlesList
          setArticleName={setArticleName}
          setPrice={setPrice}
          setTva={setTva}
          articles={articles}
          setEdit={setEdit}
          setArticle={setArticle}
          responsive={responsive}
          showAddArticle={showAddArticle}
          setShowAddArticle={setShowAddArticle}
        />
      </Col>

      <Col md={5} sm={6} xs={12} className="">
        {edit ? (
          <Edit
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
            responsive={responsive}
          />
        ) : (
          <AjoutForm
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
            responsive={responsive}
          />
        )}
      </Col>
    </Row>
  );

  return (
    <div className="App">
      <header className="App-header">
        <Container className="m-auto">
          {responsive ? mobileView : defaultView}

        </Container>
      </header>
    </div>
  );
}

export default App;
