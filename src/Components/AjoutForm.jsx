import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import uuid from "react-uuid";

function AjoutForm({
  articleName,
  setArticleName,
  price,
  setPrice,
  tva,
  setTva,
  articles,
  setArticles,
  total,
  setTotal,
}) {
  // Gere state du nom de nouveau article
  const inputNameArticleHandler = (e) => {
    setArticleName(e.target.value);
    // console.log(articleName);
  };

  // gere le prix unitaire HT
  const inputPriceHandler = (e) => {
    // test if value is !number
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPrice(e.target.value);
    }
  };

  // Gere TVA en %
  const inputTvaHandler = (e) => {
    // test if value is !number
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setTva(e.target.value);
    }
  };

  // Calcul total price TTC
  if (tva) {
    const totalReduc = (price / 100) * tva;
    const total = price - totalReduc;
    setTotal(parseFloat(total));
  }
  // Add Article onSubmit
  const addArticle = (e) => {
    e.preventDefault();
    if (articleName.replace(/\s/g, "").length && price && tva && total) {
      setArticles([
        ...articles,
        {
          articleName: articleName.replace(/\s+/g, " ").trim(),
          price: price,
          tva: tva,
          total,
          id: uuid(),
        },
      ]);
      alert("Vous avez ajoutez un article");
      setPrice("");
      setTva("");
      setArticleName("");
      setTotal("");
    }
  };

  return (
    <Form className="bgColor px-2 pt-1 mb-2 pb-3">
      <h1 className="pl-1">Ajouter un article</h1>
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
            onChange={inputNameArticleHandler}
            value={articleName}
            type="text"
            placeholder=""
            className="placeholderOff"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          placeholder="Nom de l'article"
          label="Prix unitaire HT"
          className="mb-3"
        >
          {/* Prix unitaire HT */}
          <Form.Control
            onChange={inputPriceHandler}
            value={price}
            type="text"
            placeholder=""
            className="placeholderOff"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          placeholder="TVA en %"
          label="TVA en %"
          className="mb-3"
        >
          {/* TVA en % */}
          <Form.Control
            onChange={inputTvaHandler}
            value={tva}
            type="text"
            placeholder=""
            maxLength={2}
            className="placeholderOff"
          />
        </FloatingLabel>
        <Row>
          <Col xs={6}>
            <h5>Prix total TTC</h5>
          </Col>
          <Col className="alignText" xs={6}>
            <h5>{total ? total : 0} €</h5>
          </Col>
        </Row>
        <Button
          className={`buttonCenter mt-5 ${
            articleName && price && tva ? "" : "disabled"
          }`}
          onClick={addArticle}
          size="lg"
        >
          Enregistrer l'article
        </Button>
      </Form.Group>
    </Form>
  );
}

AjoutForm.propTypes = {};

export default AjoutForm;
