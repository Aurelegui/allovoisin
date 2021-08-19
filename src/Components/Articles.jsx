import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Articles({ articleName, setArticle, setEdit, article }) {
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

export default Articles;
