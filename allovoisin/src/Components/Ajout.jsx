import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";

// import Col from "react-bootstrap/Col";

// import uuid from "react-uuid";

function Ajout({ articleName, setArticleName, price, setPrice, tva, setTva, }) {

    // Gere state du nom de nouveau article
    function inputNameArticle(e){
        setArticleName(e.target.value);
    }

    // gere le prix unitaire HT
    
    // Gere TVA en %

    // Fait le calcule

    // Event Handler pour ne pas refresh

  return (
    <Form>
      <h1>Ajouter un article</h1>
      <Form.Group
        bg="primary"
        as={Col}
        className="mb-3"
        controlId="formAddArticle"
      >
        <FloatingLabel
          controlId="floatingInput"
          placeholder="Nom de l'article"
          label="Nom de l'article"
          className="mb-3"
        >
            {/* Nom de l'article */}
          <Form.Control 
          type="text" 
          placeholder="name@example.com" 
          Onchange={inputNameArticle}/>
        </FloatingLabel>
        
        <FloatingLabel
          controlId="floatingInput"
          placeholder="Nom de l'article"
          label="Prix unitaire HT"
          className="mb-3"
        >
            {/* Prix unitaire HT */}
          <Form.Control type="text" placeholder="" />{" "}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          placeholder="TVA en %"
          label="TVA en %"
          className="mb-3"
        >
            {/* TVA en % */}
          <Form.Control type="text" placeholder="TVA en %" />
        </FloatingLabel>
        <Row>
          <Col xs={6}>
            <h5>Prix total TTC</h5>
          </Col>
          <Col className="alignText" xs={6}>
            <h5>Le prix €</h5>
          </Col>
        </Row>
        <Button
          disabled
          className="buttonCenter mt-5"
          type="submit"
          onSubmit=""
          variant="secondary"
          size="lg"
        >
          Button
        </Button>
      </Form.Group>
    </Form>
  );
}

Ajout.propTypes = {};

export default Ajout;
