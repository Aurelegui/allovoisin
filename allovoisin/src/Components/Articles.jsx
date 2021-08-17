import React from "react";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const Articles = ({
  articleName,
  setArticleName,
  price,
  setPrice,
  tva,
  setTva,
  article,
}) => {

  const deleteHandler = e => {

  }
  return (
    // <Container>
      <ListGroup.Item
        action
        // onClick={}
      >
        {articleName}
        <i className="bi bi-chevron-right closeButton"></i>
      </ListGroup.Item>
    // </Container>
  );
};

Articles.propTypes = {};

export default Articles;
