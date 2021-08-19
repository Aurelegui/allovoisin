import React from "react";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import ChevronRight from "react-bootstrap/ChevronRight";
import ListGroup from "react-bootstrap/ListGroup";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Articles({
  articleName,
  setArticleName,
  price,
  setPrice,
  tva,
  setTva,
  articles,
  setArticle,
  edit,
  setEdit,
  article,
}) {
  const openEdit = (e) => {
    setArticle(article);
    setEdit(true);
  };

  return (
    // <Container>
    <ListGroup.Item action onClick={openEdit}>
      {articleName}
      <ChevronRightIcon className="ml-4 closeButton" />
    </ListGroup.Item>
    // </Container>
  );
}

Articles.propTypes = {};

export default Articles;
