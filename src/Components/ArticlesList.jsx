import React from "react";
// import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Articles from "./Articles";
// import Row from "react-bootstrap/Row";

function ArticlesList({
  articleName,
  setArticleName,
  price,
  setPrice,
  tva,
  setTva,
  articles,
  setEdit,
  setArticle,
}) {
  return (
    <div>
      <Container className="bgColor py-3">
        <h1>Mes articles</h1>
        <ListGroup variant="flush">
          {articles.map((article) => (
            <Articles
              articleName={article.articleName}
              setArticleName={setArticleName}
              price={article.price}
              setPrice={setPrice}
              tva={article.tva}
              setTva={setTva}
              key={article.id}
              total={article.total}
              setEdit={setEdit}
              article={article}
              setArticle={setArticle}
            />
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

ArticlesList.propTypes = {};

export default ArticlesList;
