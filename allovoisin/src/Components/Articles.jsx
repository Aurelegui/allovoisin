import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Articles = ({}) => {
  return (
    <div>
      <Form.Group
        bg="primary"
        as={Col}
        className="mb-3"
        controlId="formAddArticle"
      >
        <Col md={7} sm={6} xs={12}>
            
        </Col>
      </Form.Group>
    </div>
  );
};

Articles.propTypes = {};

export default Articles;
