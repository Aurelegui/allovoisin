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
  article,
}) {
  return (
    <div>
      <Container>
        <h1>Mes articles</h1>
        <ListGroup variant="flush">
          {article.map((article) => (
            <Articles
              articleName={article.articleName}
              setArticleName={setArticleName}
              price={article.price}
              setPrice={setPrice}
              tva={article.tva}
              setTva={setTva}
              key={article.id}
              total={article.total}
            />
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

ArticlesList.propTypes = {};

export default ArticlesList;
